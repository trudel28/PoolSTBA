import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import "../style/Global.css"


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Head>
        <title>POOLSTBA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
