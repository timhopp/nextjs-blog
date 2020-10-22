import React from "react";
import Link from "next/link";

// Article Component For Home Page
export default function ArticleHome({ art }) {
  return (
    <div className="col-3 m-2 bg-light p-3 rounded">
      <div className="">
        <img src={art.urlToImage}></img>
      </div>
      <Link href={art.url}>
        <div className="">
          <b className="text-center" key={art.url}>
            {art.title}
          </b>
          <p>{art.description}</p>
        </div>
      </Link>
    </div>
  );
}
