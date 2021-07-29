import { useContext } from "react";
import styled from "styled-components";
import Article from "./Article";
import ArticlesNotFound from "../../assets/articles_not_found.svg";
import { AuthContext } from "../../store/auth-context";

const ArticlesWrapper = styled.div`
  margin-top: 1.6rem;
  padding: 2rem 2rem 0 2rem;
  font-family: "Noto Sans JP", sans-serif;

  h1 {
    letter-spacing: 0.6px;
  }

  .no-articles {
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 40%;
    }

    p {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 2rem;
      font-weight: bolder;
      margin-top: 1.6rem;
    }
  }
`;

const articles = [];

export default function Articles() {
  return (
    <ArticlesWrapper>
      <h1>Recent Articles</h1>
      {articles.length > 0 &&
        articles.map((article) => (
          <Article
            data={{
              category: article.category,
              title: article.title,
              author: article.author,
            }}
          />
        ))}
      {articles.length === 0 && (
        <div className="no-articles">
          <img
            src={ArticlesNotFound}
            alt="No articles found"
            className="no-articles"
          />
          <p>No Articles found</p>
        </div>
      )}
    </ArticlesWrapper>
  );
}
