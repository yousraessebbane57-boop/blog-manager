import type { Article } from "../types/Article";

const STORAGE_KEY = "blog-manager-articles";

export function getArticles(): Article[] {
  try {
    const savedArticles = localStorage.getItem(STORAGE_KEY);

    if (!savedArticles) {
      return [];
    }

    return JSON.parse(savedArticles) as Article[];
  } catch (error) {
    console.error("Error loading articles:", error);
    return [];
  }
}

export function saveArticles(articles: Article[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}