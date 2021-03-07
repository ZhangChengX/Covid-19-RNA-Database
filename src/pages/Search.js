import { Layout, Space } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import Result from '../components/Result';

import './style.css';

function Search() {
  return (
    <Layout className="layout">
      <Space direction="vertical" size="large">
        <Header />
        <SearchForm />
        <Result />
        <Footer />
      </Space>
    </Layout>
  );
}

export default Search;
