import Link from "next/link";

export default function FirstPost() {
  return (
    <main>
      <h1 className="title">
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>
      <h1>First Post</h1>;{" "}
    </main>
  );
}
