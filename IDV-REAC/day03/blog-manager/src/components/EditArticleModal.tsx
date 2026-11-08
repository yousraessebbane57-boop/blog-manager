
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import EditArticleModal from "./EditArticleModal";
import SearchBar from "./SearchBar";
import { useArticles } from "../context/ArticleContext";
import type { Article } from "../types/Article";

export default function ArticleList() {
  const { articles, updateArticle, deleteArticle } = useArticles();

  const [selectedArticle, setSelectedArticle] =
    useState<Article | null>(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  function handleSave(updatedArticle: Article) {
    updateArticle(updatedArticle);
    setSelectedArticle(null);
  }

  const categories = [
    ...new Set(articles.map((article) => article.category)),
  ];

  const filteredArticles = articles
    .filter((article) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        article.title.toLowerCase().includes(searchValue) ||
        article.author.toLowerCase().includes(searchValue);

      const matchesCategory =
        category === "" || article.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return sortOrder === "newest"
        ? dateB - dateA
        : dateA - dateB;
    });

  if (articles.length === 0) {
    return <p className="empty-message">No articles published yet.</p>;
  }

  return (
    <>
      <SearchBar
        search={search}
        category={category}
        sortOrder={sortOrder}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSortOrder}
      />

      {filteredArticles.length === 0 ? (
        <p className="empty-message">No articles match your search.</p>
      ) : (
        <div className="article-grid">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onEdit={setSelectedArticle}
              onDelete={deleteArticle}
            />
          ))}
        </div>
      )}

      {selectedArticle && (
        <EditArticleModal
          article={selectedArticle}
          onSave={handleSave}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </>
  );
}
