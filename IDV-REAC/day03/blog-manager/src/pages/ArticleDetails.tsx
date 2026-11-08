import { Link, useParams } from "react-router-dom";
import { useArticles } from "../context/ArticleContext";

function ArticleDetails() {
  const { id } = useParams<{ id: string }>();
  const { articles } = useArticles();

  const article = articles.find((item) => item.id === id);

  if (!article) {
    return (
      <section className="page">
        <h1>Article not found</h1>
        <Link to="/articles">Back to articles</Link>
      </section>
    );
  }

  return (
    <article className="article-details">
      <span>{article.category}</span>

      <h1>{article.title}</h1>

      <p className="article-meta">
        By {article.author || "Anonymous"} ·{" "}
        {new Date(article.createdAt).toLocaleDateString()}
      </p>

      <div className="article-content">
        {article.content}
      </div>

      <Link to="/articles">← Back to articles</Link>
    </article>
  );
}

export default ArticleDetails;