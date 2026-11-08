import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <p className="subtitle">WELCOME TO MY BLOG</p>

      <h1>Share your ideas. Share your journey.</h1>

      <p>
        Blog Manager is a personal platform where students
        and young professionals can share their experiences,
        projects and knowledge.
      </p>

      <p className="author">Created by Yousra Essebbane</p>

      <Link to="/articles" className="primary-button">
        Explore articles
      </Link>
    </section>
  );
}

export default Home;