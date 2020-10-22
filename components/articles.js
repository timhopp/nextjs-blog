import React from "react";
import Link from "next/link";

export default function Article({ art }) {
  return (
    <div className="col-3 m-2 bg-light p-3 rounded">
      {/* <b key={sports.url}>{sports.source.name}</b> */}
      <div className="">
        <img src={art.urlToImage}></img>
      </div>
      <Link href={art.url}>
        <div className="">
          <b className="text-center" key={art.url}>
            {art.title}
          </b>
          {/* <b>{source.name}</b> */}
          <p>{art.description}</p>
        </div>
      </Link>
    </div>
  );
}
