import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import type { Article } from "../types/Article";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ArticleContextType {
  articles: Article[];
  addArticle: (article: Article) => void;
  updateArticle: (updatedArticle: Article) => void;
  deleteArticle: (id: string) => void;
}

const ArticleContext = createContext<ArticleContextType | undefined>(
  undefined,
);

interface ArticleProviderProps {
  children: ReactNode;
}

export function ArticleProvider({
  children,
}: ArticleProviderProps) {
  const [articles, setArticles] = useLocalStorage<Article[]>(
    "blog-manager-articles",
    [],
  );

  function addArticle(article: Article): void {
    setArticles((previousArticles) => [
      article,
      ...previousArticles,
    ]);
  }

  function updateArticle(updatedArticle: Article): void {
    setArticles((previousArticles) =>
      previousArticles.map((article) =>
        article.id === updatedArticle.id
          ? updatedArticle
          : article,
      ),
    );
  }

  function deleteArticle(id: string): void {
    setArticles((previousArticles) =>
      previousArticles.filter((article) => article.id !== id),
    );
  }

  return (
    <ArticleContext.Provider
      value={{
        articles,
        addArticle,
        updateArticle,
        deleteArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}

export function useArticles(): ArticleContextType {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error(
      "useArticles must be used inside ArticleProvider",
    );
  }

  return context;
}