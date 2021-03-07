import React from 'react'
import { Card, Row, Col, Divider, Checkbox, Input, Switch, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './SearchForm.css';

const demoOptions = ['All', 'Abc', 'Def', 'Ghi', 'Jkl', 'Mnop'];

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

class SearchForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {toggleOptions: false};
	}

	toggleOptions = (e) => {
		this.setState({
			toggleOptions: e
		});
	}

	render() {
		return (
			<Card title="Data Searching" className="data-search">
				<Row gutter={[24, 24]} style={{marginBottom:24}}>
					<Col span={8}>
						<Card>
							<strong>Species</strong>
							<Divider dashed className="divider-thin"/>
							<Checkbox.Group options={demoOptions} defaultValue={['All']} name={'Species'} onChange={onChange} />
						</Card>
					</Col>
					<Col span={8}>
						<Card>
							<strong>Molecular</strong>
							<Divider dashed className="divider-thin"/>
							<Checkbox.Group options={demoOptions} defaultValue={['All']} name={'Molecular'} onChange={onChange} />
						</Card>
					</Col>
					<Col span={8}>
						<Card>
							<strong>Cell / Tissue</strong>
							<Divider dashed className="divider-thin"/>
							<Checkbox.Group options={demoOptions} defaultValue={['All']} name={'CellTissue'} onChange={onChange} />
						</Card>
					</Col>
				</Row>
				<Row gutter={[24, 24]} style={{marginBottom:24}} className={this.state.toggleOptions ? "" : "hidden"}>
					<Col span={8}>
						<Card>
							<strong>Dataset (GEO)</strong>
							<Divider dashed className="divider-thin"/>
							<Checkbox.Group options={demoOptions} defaultValue={['All']} name={'CellTissue'} onChange={onChange} />
						</Card>
					</Col>
					<Col span={8}>
						<Card>
							<strong>Conserved</strong>
							<Divider dashed className="divider-thin"/>
							<Checkbox.Group options={demoOptions} defaultValue={['All']} name={'CellTissue'} onChange={onChange} />
						</Card>
					</Col>
					<Col span={8}>
						<Card>
							<strong>Annotation-genomic location</strong>
							<Divider dashed className="divider-thin"/>
							<Checkbox.Group options={demoOptions} defaultValue={['All']} name={'CellTissue'} onChange={onChange} />
						</Card>
					</Col>
				</Row>
				<Row gutter={[24, 24]}>
					<Col span={8} style={{textAlign:"right"}}>
						Show other options: &nbsp;
						<Switch checkedChildren="On" unCheckedChildren="Off" onClick={this.toggleOptions} />
					</Col>
					<Col span={8}>
						<Input placeholder="Type in containing keyword" allowClear />
					</Col>
					<Col span={8}>
						<Button type="primary" shape="round" icon={<SearchOutlined />}>
						  Search
						</Button>
					</Col>
				</Row>
			</Card>
		);
	}
}

export default SearchForm;
