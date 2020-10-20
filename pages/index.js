import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// @ts-ignore
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
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
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Tim Hopp. This is a sample blog to learn React and Next.js.
        </p>
      </section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <div className="row">
              {sportsnews.articles.map((sports) => (
                <div className="row m-4 bg-light p-3 rounded">
                  {/* <b key={sports.url}>{sports.source.name}</b> */}
                  <div className="col-3">
                    <img
                      className={utilStyles.img}
                      src={sports.urlToImage}
                    ></img>
                  </div>
                  <Link href={sports.url}>
                    <div className="col-9">
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
          <div className="col-4 bg-dark">
            {trendingnews.articles.map((trending) => (
              <div className="row m-4 bg-light p-3 rounded">
                {/* <b key={trending.url}>{trending.source.name}</b> */}
                <div className="col-3">
                  <img
                    className={utilStyles.img}
                    src={trending.urlToImage}
                  ></img>
                </div>
                <Link href={trending.url}>
                  <div className="col-9">
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
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const sportsnews = await res.json();
  const res2 = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const trendingnews = await res2.json();
  const res3 = await fetch(
    "https://newsapi.org/v2/everything?q=world&apiKey=22221f62f9584a0d8654a29cadc834a8"
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
