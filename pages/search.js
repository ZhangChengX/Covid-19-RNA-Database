import Layout from '../components/layout_wrapper';
import SearchForm from '../components/search_form';
import Result from '../components/result';


function Search() {
  return (
    <Layout>
      <SearchForm />
      <Result />
    </Layout>
  )
}

export default Search;
