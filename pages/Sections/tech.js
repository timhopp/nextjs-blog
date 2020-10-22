import fetch from "node-fetch";
import NavBarComp from "../../components/nav";
import Footer from "../../components/footer";
import ArticleSec from "../../components/articlesSec";

function Tech({ technews }) {
  return (
    <div>
      <NavBarComp></NavBarComp>
      <section>
        <h1 className="text-center">Tech News in the US</h1>
        <div className="">
          <div>
            {technews.articles.map((tech) => (
              <ArticleSec key={tech.title} art={tech}></ArticleSec>
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
    "https://newsapi.org/v2/everything?q=tech&pageSize=20&apiKey=22221f62f9584a0d8654a29cadc834a8"
  );
  const technews = await res.json();

  return {
    props: {
      technews,
    },
  };
}

export default Tech;
