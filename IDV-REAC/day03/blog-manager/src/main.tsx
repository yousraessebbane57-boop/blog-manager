
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ArticleProvider } from "./context/ArticleContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ArticleProvider>
        <App />
      </ArticleProvider>
    </BrowserRouter>
  </StrictMode>,
);
