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

function worldTrending({ worldnews }) {
  return (
    <div>
      <NavBarComp></NavBarComp>
      <section>
        <h1 className="text-center">Trending News Around The World</h1>
        <div className="">
          <div>
            {worldnews.articles.map((world) => (
              <div className="row m-4 bg-light p-3 rounded">
                {/* <b key={world.url}>{world.source.name}</b> */}
                <div className="col-3">
                  <img className={utilStyles.img} src={world.urlToImage}></img>
                </div>
                <Link href={world.url}>
                  <div className="col-9">
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
        </div>
      </section>
    </div>
  );
}

//NOTE is there a better way to do this?

export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=world&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const worldnews = await res.json();

  return {
    props: {
      worldnews,
    },
  };
}

export default worldTrending;
