import React from 'react'
import { Menu } from 'antd';
import Link from 'next/link'
import { withRouter } from 'next/router'

import { HomeOutlined, SearchOutlined, BarChartOutlined, InfoCircleOutlined, DownloadOutlined, LineChartOutlined, FileTextOutlined, ContactsOutlined, MailOutlined } from '@ant-design/icons';

class Header extends React.Component {

	constructor(props){
		super(props);
		this.state = {activeKey: "home"};
		let rel_path = this.props.router.pathname;
		let activeKey = rel_path.replace("/", "");
		if (activeKey === "") activeKey = "home";
		this.state = {activeKey: activeKey};
		// console.log(this.state.activeKey);
	}

	handleClick = e => {
		// console.log('click ', e);
		this.setState({ activeKey: e.key });
	};

	render() {
		return (
			<>
				<div className="logo">
					<h1>Noncoding-CoV</h1>
					<h6>Human Noncoding RNAs in Response to SARS-CoV-2 infection</h6>
				</div>
				<Menu onClick={this.handleClick} selectedKeys={[this.state.activeKey]} mode="horizontal" className="nav-menu light-border">
			        <Menu.Item key="home" icon={<HomeOutlined />}>
			          <Link href="/">Home</Link>
			        </Menu.Item>
			        <Menu.Item key="search" icon={<SearchOutlined />}>
			          <Link href="/search">Search</Link>
			        </Menu.Item>
			        <Menu.Item key="statistics" icon={<BarChartOutlined />}>
			          <a href="#3">
			            Statistics
			          </a>
			        </Menu.Item>
			        <Menu.Item key="tutorial" icon={<InfoCircleOutlined />}>
			          <a href="#4">
			            Tutorial
			          </a>
			        </Menu.Item>
			        <Menu.Item key="download" icon={<DownloadOutlined />}>
			          <a href="#5">
			            Download
			          </a>
			        </Menu.Item>
			        <Menu.Item key="Differential-Expression-Analysis" icon={<LineChartOutlined />}>
			          <a href="#6">
			            Differential Expression Analysis
			          </a>
			        </Menu.Item>
			        <Menu.Item key="annotation" icon={<FileTextOutlined />}>
			          <a href="#7">
			            Annotation
			          </a>
			        </Menu.Item>
			        <Menu.Item key="about" icon={<ContactsOutlined />}>
			          <a href="#8">
			            About
			          </a>
			        </Menu.Item>
			        <Menu.Item key="contact" icon={<MailOutlined />}>
			          <a href="#9">
			            Contact
			          </a>
			        </Menu.Item>
				</Menu>
			</>
		);
	}
}

export default withRouter(Header);
