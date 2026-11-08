
import { Link } from "react-router-dom";
import ArticleList from "../components/ArticleList";

function Articles() {
  return (
    <section className="page">
      <h1>All Articles</h1>
      <p>Discover what people are sharing.</p>

      <ArticleList />

      <Link to="/new" className="primary-button">
        Create Article
      </Link>
    </section>
  );
}

export default Articles;
