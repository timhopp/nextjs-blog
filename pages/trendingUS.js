import Head from "next/head";
import Link from "next/link";
import { render } from "react-dom";
import utilStyles from "../styles/utils.module.css";
import fetch from "node-fetch";
import axios from "axios";
import { GetStaticProps } from "next";
import Col from "react-bootstrap/Button";
import Row from "react-bootstrap/Button";
import NavBarComp from "../components/nav";
import Footer from "../components/footer";

function Trending({ trendingnews }) {
  return (
    <div>
      <NavBarComp></NavBarComp>
      <section>
        <h1 className="text-center">Trending News in the US</h1>
        <div className="">
          <div>
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
      </section>
      <Footer></Footer>
    </div>
  );
}

//NOTE is there a better way to do this?

export async function getStaticProps() {
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
