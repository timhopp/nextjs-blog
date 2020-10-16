import Head from "next/head";
import Link from "next/link";
import { render } from "react-dom";
import utilStyles from "../styles/utils.module.css";
import fetch from "node-fetch";
import axios from "axios";
import { GetStaticProps } from "next";
import Col from "react-bootstrap/Button";
import Row from "react-bootstrap/Button";

function Trending({ trendingnews }) {
  return (
    <section>
      <h1 className="text-center">Trending News</h1>
      <div className="row justify-content-center">
        <ul className="">
          {trendingnews.articles.map((trending) => (
            <li className="row m-3 bg-light p-3 rounded">
              {/* <b key={trending.url}>{trending.source.name}</b> */}
              <div className="col-3">
                <img className={utilStyles.img} src={trending.urlToImage}></img>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

//NOTE is there a better way to do this?

export async function getStaticProps() {
  debugger;
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const trendingnews = await res.json();
  console.log(trendingnews);

  return {
    props: {
      trendingnews,
    },
  };
}

export default Trending;
