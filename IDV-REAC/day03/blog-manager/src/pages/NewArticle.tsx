import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useArticles } from "../context/ArticleContext";

function NewArticle() {
  const { addArticle } = useArticles();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !category.trim() || !content.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    addArticle({
      id: crypto.randomUUID(),
      title: title.trim(),
      category: category.trim(),
      content: content.trim(),
      author: author.trim(),
      createdAt: new Date().toISOString(),
    });

    navigate("/articles");
  }

  return (
    <section className="page">
      <h1>Create a new article</h1>

      <form className="article-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title *</label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter your article title"
        />

        <label htmlFor="category">Category *</label>
        <input
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="e.g. Programming"
        />

        <label htmlFor="author">Author</label>
        <input
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          placeholder="Your name"
        />

        <label htmlFor="content">Content *</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Write your article..."
          rows={8}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="primary-button">
          Publish article
        </button>
      </form>
    </section>
  );
}

export default NewArticle;