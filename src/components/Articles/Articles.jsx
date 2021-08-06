import { useState, useEffect, memo } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import Article from "./Article";
import { db } from "../../firebase";
import ArticlesNotFound from "../../assets/articles_not_found.svg";

const ArticlesWrapper = styled.div`
  margin-top: 1.6rem;
  padding: 2rem 2rem 20rem 2rem;
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

  .loader-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

function Articles({ selectedCategory }) {
  const [loader, setLoader] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let articlesArr = [];
    let condition = selectedCategory === "All" ? "!=" : "==";

    db.collection("articles")
      .where("category", condition, selectedCategory)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          articlesArr.push(doc.data());
        });
        setArticles(articlesArr);
      })
      .catch((err) => console.err("Unable to fetch articles ❌: " + err))
      .finally(() => setLoader(false));
  }, [selectedCategory]);

  return (
    <ArticlesWrapper>
      <h1>Recent Articles</h1>
      {loader && (
        <div className="loader-container">
          <Loader type="ThreeDots" color="#6a89cc" height={40} width={40} />
        </div>
      )}
      {articles.length > 0 &&
        articles.map((article) => <Article data={article} key={article.id} />)}
      {!loader && articles.length === 0 && (
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

function renderClause(prevState, nextState) {
  return prevState.selectedCategory === nextState.selectedCategory;
}

export default memo(Articles, renderClause);
