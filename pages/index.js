import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout_wrapper'
import Intro from '../components/intro';
import SearchForm from '../components/search_form';

// import styles from '../styles/Home.module.css'

export async function getStaticProps() {
	const res = await fetch(process.env.URL + '/api/option_value');
	const data = await res.json();
	return {
		props: {
			data
		}
	}
}

function Index(data) {
  	return (
	    <Layout>
	      <Head>
	        <title>Home</title>
	      </Head>
	      <Intro />
	      <SearchForm option_value={data} />
	    </Layout>
  	)
}

export default Index;