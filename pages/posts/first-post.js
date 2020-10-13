import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <main>
        <Head>
          <title>First Post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="title">
          <Link href="/">
            <a>Home</a>
          </Link>
        </h1>
        <h1>First Post</h1>{" "}
      </main>
    </Layout>
  );
}
