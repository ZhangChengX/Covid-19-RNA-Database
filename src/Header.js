import React from 'react'
import { Menu } from 'antd';

import { HomeOutlined, SearchOutlined, BarChartOutlined, InfoCircleOutlined, DownloadOutlined, LineChartOutlined, FileTextOutlined, ContactsOutlined, MailOutlined } from '@ant-design/icons';

class Header extends React.Component {

	state = {
		current: 'home',
	};

	handleClick = e => {
		console.log('click ', e);
		this.setState({ current: e.key });
	};

	render() {
		const { current } = this.state;
		return (
			<>
				<h1>Covid-19 RNA Database</h1>
				<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
			        <Menu.Item key="home" icon={<HomeOutlined />}>
			          <a href="#1">
			            Home
			          </a>
			        </Menu.Item>
			        <Menu.Item key="search" icon={<SearchOutlined />}>
			          <a href="#2">
			            Search
			          </a>
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

export default Header;
