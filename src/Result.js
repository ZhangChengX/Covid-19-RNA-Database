import React from 'react'
import { Card, Table } from 'antd';


const dataSource = [
  {
    key: '1',
    name: '胡1',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡2',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '3',
    name: '张1',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '4',
    name: '张2',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
for (let i = 5; i < 100; i++) {
  dataSource.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 500,
    sorter: (a, b) => a.name > b.name,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 500,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    width: 500,
    sorter: (a, b) => a.address > b.address,
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
