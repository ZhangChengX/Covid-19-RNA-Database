import Head from 'next/head'
import Layout from '../components/layout_wrapper';
import SearchForm from '../components/search_form';
import Result from '../components/result';

export async function getStaticProps() {
	const res = await fetch(process.env.URL + '/api/option_value');
	const data = await res.json();
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
        <title>Search</title>
      </Head>
      <SearchForm option_value={data} />
      <Result />
    </Layout>
  )
}

export default Search;
