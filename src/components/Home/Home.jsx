import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <main>
        <h2>Home</h2>
        <p>Go to About</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
