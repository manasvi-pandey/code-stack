import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import Article from "./Article";
import { db } from "../../firebase";
import ArticlesNotFound from "../../assets/articles_not_found.svg";

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

  .loader-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

export default function Articles() {
  const [loader, setLoader] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let articlesArr = [];
    db.collection("articles")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          articlesArr.push(doc.data());
          setLoader(false);
        });

        setArticles(articlesArr);
      })
      .catch((err) => console.err("Unable to fetch articles ❌: " + err));
  }, []);

  return (
    <ArticlesWrapper>
      <h1>Recent Articles</h1>
      {loader && (
        <div className="loader-container">
          <Loader type="ThreeDots" color="#6a89cc" height={40} width={40} />
        </div>
      )}
      {articles.length > 0 &&
        articles.map((article) => <Article data={article} />)}
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
