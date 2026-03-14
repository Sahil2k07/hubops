import Link from "next/link";

export default function Home() {
  return (
    <main className="home-main">
      <h1>Checkout the Services page</h1>
      <Link href="/services" className="home-link">
        Go to services →
      </Link>
    </main>
  );
}
