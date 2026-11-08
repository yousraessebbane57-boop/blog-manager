
import { Link } from "react-router-dom";
import type { Article } from "../types/Article";

interface ArticleCardProps {
  article: Article;
  onEdit: (article: Article) => void;
  onDelete: (id: string) => void;
}

export default function ArticleCard({
  article,
  onEdit,
  onDelete,
}: ArticleCardProps) {
  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (confirmed) {
      onDelete(article.id);
    }
  }

  return (
    <article className="article-card">
      <Link
        to={`/articles/${article.id}`}
        className="article-card-link"
      >
        <div className="article-card-category">
          {article.category}
        </div>

        <h2 className="article-card-title">{article.title}</h2>

        <p className="article-card-excerpt">
          {article.content.length > 150
            ? article.content.slice(0, 150) + "..."
            : article.content}
        </p>

        <div className="article-card-meta">
          <span>By {article.author || "Anonymous"}</span>
          <small>
            Published on{" "}
            {new Date(article.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
        </div>
      </Link>

      <div className="article-card-actions">
        <button
          type="button"
          className="edit-button"
          onClick={() => onEdit(article)}
        >
          Edit
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
