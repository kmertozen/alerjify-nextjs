import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel'
import Trio from '../components/Trio'
import Interests from '../components/Interests'
import Trends from '../components/Trends'

export default function Home({ test }) {
  console.log(test)
  const trio = test.filter(recipes => recipes.y_kod > 0 && recipes.y_kod < 5);
  const trends = test.filter(recipes => recipes.y_kod > 2 && recipes.y_kod < 10);
  const interests = test.slice().reverse();
  return (
    <div className="asd">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel recipe={test} />
      <div className='container wrapper'>
        <Trio trio={trio} />
      </div>
      <div className='container wrapper'>
        <div className='flex'>
          <Trends trends={trends} />
          <Interests interests={interests} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`https://www.alerjify.com/api/recipes`);
  const data = await req.json();
  return {
    props: { test: data }
  }
}