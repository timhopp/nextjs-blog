import React from "react";
import Link from "next/link";
// @ts-ignore
import utilStyles from "../styles/utils.module.css";

// Article Component For Section Pages
export default function ArticleSec({ art }) {
  return (
    <div className="row m-4 bg-light p-2 rounded">
      <div className="col-3">
        <img className={utilStyles.img} src={art.urlToImage}></img>
      </div>
      <Link href={art.url}>
        <div className="col-9">
          <b className="text-center" key={art.url}>
            {art.title}
          </b>
          <p>{art.description}</p>
        </div>
      </Link>
    </div>
  );
}
