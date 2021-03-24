import { Layout, Space } from 'antd';
import Header from '../components/header';
import Footer from '../components/footer';


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
