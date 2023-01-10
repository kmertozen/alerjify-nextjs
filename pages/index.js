import Head from "next/head";
import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";
import Trio from "../components/Trio";
import Interests from "../components/Interests";
import Trends from "../components/Trends";
import LayoutSection from "../components/LayoutSection";

export default function Home({ test }) {
  console.log(test);
  const trio = test.filter((recipes) => recipes.y_kod > 0 && recipes.y_kod < 5);
  const trends = test.filter(
    (recipes) => recipes.y_kod > 2 && recipes.y_kod < 10
  );
  const interests = test.slice().reverse();
  return (
    <div className="asd">
      <Carousel recipe={test} />
      <Trio trio={trio} />
      <LayoutSection>
        <div className="flex">
          <Trends trends={trends} />
          <Interests interests={interests} />
        </div>
      </LayoutSection>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`https://www.alerjify.com/api/recipes`);
  const data = await req.json();
  return {
    props: { test: data },
  };
}
