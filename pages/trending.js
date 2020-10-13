import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
// import Layout from "../../components/layout";
// import { getTrendingNews } from "../lib/posts";

export default function Trending({ trending }) {
  return (
    <section>
      <h1>Trending</h1>;
    </section>
  );
  // <ul className={utilStyles.list}>
  //   {trending.map(({ id, date, title }) => (
  //     <li className={utilStyles.listItem} key={id}>
  //       {title}
  //       <br />
  //       {id}
  //       <br />
  //       {date}
  //     </li>
  //   ))}
  // </ul>;
}

//NOTE is there a better way to do this?

// export async function getStaticProps() {
//   const res = await fetch("https://news67.p.rapidapi.com/trending?limit=20", {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "news67.p.rapidapi.com",
//       "x-rapidapi-key": "80a35aed56msh4dbbb0b1e15af05p1dd2a9jsnd5e83e7094b3",
//     },
//   })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   const trending = await res.toJSON();

//   return {
//     props: {
//       trending,
//     },
//   };
// }
