import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// @ts-ignore
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import NavBarComp from "../components/nav";
import Navbar from "react-bootstrap/Navbar";

export default function Home({ sportsnews, trendingnews, worldnews }) {
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
      <div className="container-fluid">
        <div className="row justify-content-center">
          <Link href="trendingUS">
            <h3 className="text-left col-9">US News</h3>
          </Link>

          {trendingnews.articles.map((trending) => (
            <div className="col-3 m-2 bg-light p-3 rounded">
              {/* <b key={trending.url}>{trending.source.name}</b> */}
              <div className="">
                <img className={utilStyles.img} src={trending.urlToImage}></img>
              </div>
              <Link href={trending.url}>
                <div className="">
                  <b className="text-center" key={trending.url}>
                    {trending.title}
                  </b>
                  {/* <b>{trending.source.name}</b> */}
                  <p>{trending.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <Link href="trendingWorld">
            <h3 className="text-left col-9">World News</h3>
          </Link>

          {worldnews.articles.map((world) => (
            <div className="col-3 m-2 bg-light p-3 rounded">
              {/* <b key={world.url}>{world.source.name}</b> */}
              <div className="">
                <img className={utilStyles.img} src={world.urlToImage}></img>
              </div>
              <Link href={world.url}>
                <div className="">
                  <b className="text-center" key={world.url}>
                    {world.title}
                  </b>
                  {/* <b>{world.source.name}</b> */}
                  <p>{world.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <Link href="/sports">
            <h3 className="text-left col-9">Sports</h3>
          </Link>
          {sportsnews.articles.map((sports) => (
            <div className="col-3 m-2 bg-light p-2 rounded">
              <div className="mb-2">
                <img className={utilStyles.img} src={sports.urlToImage}></img>
              </div>
              <Link href={sports.url}>
                <div className="">
                  <b className="text-center" key={sports.url}>
                    {sports.title}
                  </b>
                  {/* <b>{sports.source.name}</b> */}
                  <p>{sports.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
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

  return {
    props: {
      sportsnews,
      trendingnews,
      worldnews,
    },
  };
}
