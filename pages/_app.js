import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import "../style/Global.css"
import Router from "next/router"

import ProgressBar from "@badrap/bar-of-progress";


const progress = new ProgressBar({
  size:5,
  color:"#1b97f5",
  className:"z-50",
  delay: 100
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

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
