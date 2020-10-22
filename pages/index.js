import Head from "next/head";
// @ts-ignore
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import NavBarComp from "../components/nav";
import Footer from "../components/footer";
import ArticleHome from "../components/articlesHome";

export default function Home({
  sportsnews,
  trendingnews,
  worldnews,
  technews,
}) {
  return (
    <div>
      <div>
        <NavBarComp></NavBarComp>
      </div>
      <Head>
        <title>News-Fi</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <b className="ml-4">
          Welcome to News-Fi, A sample news blog built with React and Next.js
        </b>
      </section>
      {/* Articles */}
      <section>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <Link href="Sections/trendingUS">
              <h3 className="text-left col-9">US News</h3>
            </Link>

            {trendingnews.articles.map((trending) => (
              <ArticleHome key={trending.title} art={trending}></ArticleHome>
            ))}
          </div>
          <div className="row justify-content-center">
            <Link href="Sections/trendingWorld">
              <h3 className="text-left col-9">World News</h3>
            </Link>

            {worldnews.articles.map((world) => (
              <ArticleHome key={world.title} art={world}></ArticleHome>
            ))}
          </div>
          <div className="row justify-content-center">
            <Link href="Sections/sports">
              <h3 className="text-left col-9">Sports</h3>
            </Link>
            {sportsnews.articles.map((sports) => (
              <ArticleHome key={sports.title} art={sports}></ArticleHome>
            ))}
          </div>
          <div className="row justify-content-center">
            <Link href="Sections/tech">
              <h3 className="text-left col-9">Tech</h3>
            </Link>
            {technews.articles.map((tech) => (
              <ArticleHome key={tech.title} art={tech}></ArticleHome>
            ))}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=3&category=sports&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const sportsnews = await res.json();
  const res2 = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=3&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const trendingnews = await res2.json();
  const res3 = await fetch(
    "https://newsapi.org/v2/everything?q=world&pageSize=3&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const worldnews = await res3.json();
  const res4 = await fetch(
    "https://newsapi.org/v2/everything?q=tech&pageSize=3&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const technews = await res4.json();

  return {
    props: {
      sportsnews,
      trendingnews,
      worldnews,
      technews,
    },
  };
}
