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

function Sports({ sportsnews }) {
  return (
    <div>
      <NavBarComp></NavBarComp>
      <section>
        <h1 className="text-center">Sports News in the US</h1>
        <div className="">
          <div>
            {sportsnews.articles.map((sports) => (
              <div className="row m-4 bg-light p-3 rounded">
                {/* <b key={sports.url}>{sports.source.name}</b> */}
                <div className="col-3">
                  <img className={utilStyles.img} src={sports.urlToImage}></img>
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
      </section>
      <Footer></Footer>
    </div>
  );
}

//NOTE is there a better way to do this?

export async function getStaticProps() {
  debugger;
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const sportsnews = await res.json();

  return {
    props: {
      sportsnews,
    },
  };
}

export default Sports;
