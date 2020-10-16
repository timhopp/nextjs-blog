import Head from "next/head";
import Link from "next/link";
import { render } from "react-dom";
import utilStyles from "../styles/utils.module.css";
import fetch from "node-fetch";
import axios from "axios";
import { GetStaticProps } from "next";
// import Layout from "../../components/layout";
// import { getTrendingNews } from "../lib/posts";

function Trending({ trendingnews }) {
  return (
    <section>
      <h1>Trending</h1>
      <h3>Updates?</h3>
      <ul>
        {trendingnews.map((trending) => (
          <li key={trending.url}>
            <b key={trending.url}>QW {trending.title}</b>
          </li>
        ))}
      </ul>
    </section>
  );
}

//NOTE is there a better way to do this?

export async function getStaticProps() {
  const trendingnews = await axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=22221f62f9584a0d8654a29cadc834a8",
      { transformResponse: [] }
    )
    .then((response) => {});
  // .then((response) => response.json())
  // console.log(res);

  // let jres = await res.json();

  // console.log(jres);

  // const trendingnews = res;

  // const trendingnews = [JSON.stringify(res)];
  console.log(trendingnews);

  return {
    props: {
      trendingnews,
    },
  };
}

export default Trending;
