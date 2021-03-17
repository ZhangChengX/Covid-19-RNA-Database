import React from 'react'
import { Card, Table, Button, Radio } from 'antd';

import { DownloadOutlined } from '@ant-design/icons';

import './Result.css';

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

  constructor(props){
    super(props);
    this.state = {downloadFileType: "csv"};
  }

	render() {

    const downloadCheckBoxOnChange = (e) => {
      // console.log(e.target.value);
      this.setState({
        downloadFileType: e.target.value
      });
    };

    const downloadBtnOnClick = (e) => {
      console.log(this.state.downloadFileType);
    };
		
		return (
			<Card title="Searching Result" className="data-search">
        <div className="download-box">
          <Radio.Group onChange={downloadCheckBoxOnChange} value={this.state.downloadFileType}>
            <Radio value={"csv"}>csv</Radio>
            <Radio value={"txt"}>txt</Radio>
          </Radio.Group>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} onClick={downloadBtnOnClick} ghost>
            Download
          </Button>
        </div>
				<Table dataSource={dataSource} columns={columns} scroll={{ x: 1500 }} />
			</Card>
		);
	}
}

export default Search;
