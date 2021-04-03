import Head from 'next/head'
import Layout from '../components/layout_wrapper';
import SearchForm from '../components/search_form';
import Result from '../components/result';
import option_value_json from './api/option_value.json'

export async function getStaticProps() {
	// const res = await fetch(process.env.URL + '/api/option_value');
	// const data = await res.json();
  const data = option_value_json;
	return {
		props: {
			data
		}
	}
}

function Search(data) {
  return (
    <Layout>
      <Head>
        <title>Search | {process.env.TITLE}</title>
      </Head>
      <SearchForm option_value={data} />
      <Result />
    </Layout>
  )
}

export default Search;
