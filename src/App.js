import { Layout, Space } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Search from './Search';

import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Space direction="vertical" size="large">
        <Header />
        <Intro />
        <Search />
        <Content>
          Content<br />
        </Content>
        <Footer />
      </Space>
    </Layout>
  );
}

export default App;
