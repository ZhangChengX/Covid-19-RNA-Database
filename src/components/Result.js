import React from 'react'
import { Card, Table } from 'antd';


const dataSource = [
  {
    id: '1',
    species: '胡1',
    molecular: 32,
    dataset: '西湖区湖底公园1号',
  },
  {
    id: '2',
    species: '胡2',
    molecular: 42,
    dataset: '西湖区湖底公园1号',
  },
];
for (let i = 5; i < 100; i++) {
  dataSource.push({
    id: i,
    species: `Edward King ${i}`,
    molecular: 32,
    dataset: `London, Park Lane no. ${i}`,
  });
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 500,
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Species',
    dataIndex: 'species',
    key: 'species',
    width: 500,
    sorter: (a, b) => a.species > b.species,
  },
  {
    title: 'Molecular',
    dataIndex: 'molecular',
    key: 'molecular',
    width: 500,
    sorter: (a, b) => a.molecular > b.molecular,
  },
  {
    title: 'Dataset (GEO)',
    dataIndex: 'dataset',
    key: 'dataset',
    width: 500,
    sorter: (a, b) => a.dataset > b.dataset,
  },
];


class Search extends React.Component {

	render() {
		// const { current } = this.state;
		
		return (
			<Card title="Searching Result" className="data-search">
				<Table dataSource={dataSource} columns={columns} scroll={{ x: 1500 }} />
			</Card>
		);
	}
}

export default Search;
