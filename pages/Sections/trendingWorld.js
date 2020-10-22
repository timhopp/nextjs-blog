import fetch from "node-fetch";
import NavBarComp from "../../components/nav";
import Footer from "../../components/footer";
import ArticleSec from "../../components/articlesSec";

function worldTrending({ worldnews }) {
  return (
    <div>
      <NavBarComp></NavBarComp>
      <section>
        <h1 className="text-center">Trending News Around The World</h1>
        <div className="">
          <div>
            {worldnews.articles.map((world) => (
              <ArticleSec key={world.title} art={world}></ArticleSec>
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
