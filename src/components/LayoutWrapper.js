import { Layout, Space } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LayoutWrapper = ({children}) => {
	return (
		<Layout className="layout">
	      <Space direction="vertical" size="large">
	        <Header />
	        {children}
	        <Footer />
	      </Space>
	    </Layout>
	);
}

export default LayoutWrapper;
