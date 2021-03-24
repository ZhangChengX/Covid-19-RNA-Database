import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout_wrapper'
import Intro from '../components/intro';
import SearchForm from '../components/search_form';

// import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Intro />
      <SearchForm />
    </Layout>
  )
}
