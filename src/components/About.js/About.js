import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <main>
        <h2>About</h2>
        <p>Go back to Home</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
