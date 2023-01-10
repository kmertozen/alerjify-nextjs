import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <>
    <Head>
      <title>Alerjify</title>
      <meta name="keywords" content="Alerji, Yemek, Yemek Tarifleri, Nefis Yemek Tarifleri, Gıda Hassasiyeti, Gıda, Hassasiyet, Tarifler, Diyet, Diyet Çeşitleri"/>
      <link rel="icon" href="https://www.alerjify.com/images/favicon.ico" type="image/x-icon" />

    </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
