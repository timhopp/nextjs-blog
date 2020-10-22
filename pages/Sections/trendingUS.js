import fetch from "node-fetch";
import NavBarComp from "../../components/nav";
import Footer from "../../components/footer";
import ArticleSec from "../../components/articlesSec";

function Trending({ trendingnews }) {
  return (
    <div>
      <NavBarComp></NavBarComp>
      <section>
        <h1 className="text-center">Trending News in the US</h1>
        <div className="">
          <div>
            {trendingnews.articles.map((trending) => (
              <ArticleSec key={trending.title} art={trending}></ArticleSec>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const trendingnews = await res.json();

  return {
    props: {
      trendingnews,
    },
  };
}

export default Trending;
