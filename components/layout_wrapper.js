import { Layout, Space } from 'antd';
import Header from '../components/header';
import Footer from '../components/footer';


const LayoutWrapper = ({children}) => {
	return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} />
	      		<Layout className="layout">
	      			<Space direction="vertical" size="large">
	        		{children}
	        		</Space>
	        	</Layout>
	        	<Footer />
	    </Layout>
	);
}

export default LayoutWrapper;
