import React from "react";
import Link from "next/link";
// @ts-ignore
import utilStyles from "../styles/utils.module.css";
export default function ArticleSec({ art }) {
  return (
    <div className="row m-4 bg-light p-2 rounded">
      {/* <b key={sports.url}>{sports.source.name}</b> */}
      <div className="col-3">
        <img className={utilStyles.img} src={art.urlToImage}></img>
      </div>
      <Link href={art.url}>
        <div className="col-9">
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
