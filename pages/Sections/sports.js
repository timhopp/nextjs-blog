import fetch from "node-fetch";
import NavBarComp from "../../components/nav";
import Footer from "../../components/footer";
import ArticleSec from "../../components/articlesSec";

function Sports({ sportsnews }) {
  return (
    <div>
      <NavBarComp></NavBarComp>
      <section>
        <h1 className="text-center">Sports News in the US</h1>
        <div className="">
          <div>
            {sportsnews.articles.map((sports) => (
              <ArticleSec key={sports.title} art={sports}></ArticleSec>
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
