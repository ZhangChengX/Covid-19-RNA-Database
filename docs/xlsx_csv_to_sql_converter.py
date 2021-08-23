#!/usr/bin/env python
# coding: utf-8

# xlsx or csv to sql converter
# input file name will be the sql table name

import os
import sys
import csv


if __name__ == "__main__":
	input_file = None
	output_file = None
	table_name = None
	file_type = None
	file_encoding = 'utf-8'
	tmp_csv_file = '~tmp.csv'
	csv_delimiter = ','
	is_create_id = True
	sql_insert_template = 'insert into TABLE ( COLUMNS ) values ( VALUES );'

	if 1 <len(sys.argv):
		input_file = sys.argv[1]
	else:
		print('Usage: \n    python3 xlsx_csv_to_sql_converter.py input_file.csv')
		exit()

	file_name = input_file.split('.')
	if 2 > len(file_name) or file_name[1][-4:] not in ['csv', 'xlsx']:
		print('The input file name must end with .csv or .xlsx')
		exit()

	if not os.path.isfile(input_file):
		print('Input file does not exist')
		exit()

	table_name = file_name[0]
	file_type = file_name[1]
	output_file = file_name[0] + '.sql'

	if file_type == 'xlsx':
		from xlsx2csv import Xlsx2csv
		Xlsx2csv(input_file, outputencoding=file_encoding).convert(tmp_csv_file)
		input_file = tmp_csv_file

	sql_insert_template = sql_insert_template.replace('TABLE', table_name);
	sql_list = []
	columns = None
	line_count = 0
	with open(input_file, encoding=file_encoding) as csv_file:
		csv_reader = csv.reader(csv_file, delimiter=csv_delimiter)
		for row in csv_reader:
			if line_count == 0:
				# Remove BOM
				row[0] = row[0].replace('\ufeff', '')
				if is_create_id:
					row.insert(0, 'id')
				columns = '`, `'.join(row)
				columns = '`' + columns + '`'
				print('The first line is skipped')
			else:
				if '' == ''.join(row):
					continue
				if is_create_id:
					row.insert(0, 'NULL')
				values = "', '".join(row)
				values = "'" + values + "'"
				values = values.replace("'NULL'", "NULL")
				sql = sql_insert_template.replace('COLUMNS', columns);
				sql = sql.replace('VALUES', values);
				sql_list.append(sql)
			line_count += 1

	# file_path = os.path.abspath('.')
	with open(output_file, 'w') as file:
		for sql in sql_list:
			file.write(sql + '\n')

	if file_type == 'xlsx':
		os.remove(tmp_csv_file)

	print(str(line_count) + ' rows in the input file, ' + str(len(sql_list)) + ' sql generated in ' + output_file)




