import { Layout, Space } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import SearchForm from '../components/SearchForm';

import './style.css';

function Home() {
  return (
    <Layout className="layout">
      <Space direction="vertical" size="large">
        <Header />
        <Intro />
        <SearchForm />
        <Footer />
      </Space>
    </Layout>
  );
}

export default Home;
