import React from 'react'
import { withRouter } from 'next/router'
import { Card, Row, Col, Divider, Checkbox, Input, Switch, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

let form_values = {};

function checkboxOnChange(checkedValues) {
	// console.log('checked = ', checkedValues);
	for (let i = 0; i < checkedValues.length; i++) {
		let checked_value = checkedValues[i].split("|");
		if (!(checked_value[1] in form_values)) {
			form_values[checked_value[1]] = [];
		}
		if (!form_values[checked_value[1]].includes(checked_value[0])) {
			form_values[checked_value[1]].push(checked_value[0]);
		}
	}
}

function inputOnChange(e) {
	// console.log(e.target.value);
	form_values["keyword"] = e.target.value;
}

function submitBtnOnClick() {
	console.log("form_values: ", form_values);
	return form_values;
}

// function decode_json_URI(uri_str) {
// 	let json_str = decodeURI(uri_str);
// 	json_str = json_str.replaceAll("%3A", ":");
// 	json_str = json_str.replaceAll("%2C", ",");
// 	return json_str
// }

class SearchForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			toggleOptions: false,
			option_value: {}
		};
		// Convert each item to dict, Add "All" into each nested array
		for(let key in props.option_value.data) {
			let tmp_list = [];
			for(let i = 0; i < props.option_value.data[key].length; i++) {
				tmp_list.push({label: props.option_value.data[key][i], value: props.option_value.data[key][i] + '|' + key});
			}
			// console.log(tmp_list);
			if (tmp_list[0].label != "All") {
				tmp_list.unshift({ label: 'All', value: 'All|' + key });
			}
			this.state.option_value[key] = tmp_list;
		}
	}

	submitBtnOnClick = () => {
		let form_values = submitBtnOnClick();
		// TODO fetch /api/search. get data, render data onto table
		this.props.router.push({
			pathname: '/search',
			query: {form_values: JSON.stringify(form_values)}
		});
	}

	toggleOptions = (e) => {
		this.setState({
			toggleOptions: e
		});
	}

	render() {
		return (
			<Card title="Data Searching" className="data_search light-border">
				<Row gutter={[24, 24]} style={{marginBottom:24}}>
					<Col span={8}>
						<Card>
							<strong>Species</strong>
							<Divider dashed className="divider_thin"/>
							<Checkbox.Group options={this.state.option_value.species} defaultValue={['All']} name={'Species'} onChange={checkboxOnChange} className="search_form_checkbox_group" />
						</Card>
					</Col>
					<Col span={8}>
						<Card>
							<strong>Molecular</strong>
							<Divider dashed className="divider_thin" />
							<Checkbox.Group options={this.state.option_value.molecular} defaultValue={['All']} name={'Molecular'} onChange={checkboxOnChange} className="search_form_checkbox_group" />
						</Card>
					</Col>
					<Col span={8}>
						<Card>
							<strong>Cell / Tissue</strong>
							<Divider dashed className="divider_thin" />
							<Checkbox.Group options={this.state.option_value.cell_tissue} defaultValue={['All']} name={'CellTissue'} onChange={checkboxOnChange} className="search_form_checkbox_group" />
						</Card>
					</Col>
				</Row>
				<Row gutter={[24, 24]} style={{marginBottom:24}} className={this.state.toggleOptions ? "" : "hidden"}>
					<Col span={8}>
						<Card>
							<strong>Conserved</strong>
							<Divider dashed className="divider_thin" />
							<Checkbox.Group options={this.state.option_value.conserved} defaultValue={['All']} name={'CellTissue'} onChange={checkboxOnChange} className="search_form_checkbox_group" />
						</Card>
					</Col>
					<Col span={8}>
						<Card>
							<strong>Dataset (GEO)</strong>
							<Divider dashed className="divider_thin" />
							<Checkbox.Group options={this.state.option_value.dataset_geo} defaultValue={['All']} name={'CellTissue'} onChange={checkboxOnChange} className="search_form_checkbox_group" />
						</Card>
					</Col>
					<Col span={8}>
						<Card>
							<strong>Annotation-genomic location</strong>
							<Divider dashed className="divider_thin" />
							<Checkbox.Group options={this.state.option_value.annotation_genomic_location} defaultValue={['All']} name={'CellTissue'} onChange={checkboxOnChange} className="search_form_checkbox_group" />
						</Card>
					</Col>
				</Row>
				<Row gutter={[24, 24]}>
					<Col span={8} style={{textAlign:"right"}}>
						Show other options: &nbsp;
						<Switch checkedChildren="On" unCheckedChildren="Off" onClick={this.toggleOptions} />
					</Col>
					<Col span={8}>
						<Input placeholder="Type in containing keyword" allowClear onChange={inputOnChange} onPressEnter={this.submitBtnOnClick} />
					</Col>
					<Col span={8}>
						<Button type="primary" shape="round" icon={<SearchOutlined />} onClick={this.submitBtnOnClick} >
						  Search
						</Button>
					</Col>
				</Row>
			</Card>
		);
	}
}

export default withRouter(SearchForm);
