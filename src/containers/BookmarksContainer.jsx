import { useEffect, useState } from "react";
import { db } from "../firebase";
import Article from "../components/Articles/Article";
import styled from "styled-components";
import NotFoundImage from "../assets/bookmarks_not_found.svg";

const BookmarksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  min-height: 85vh;

  img {
    width: 30rem;
  }

  p {
    margin-top: 5rem;
    font-size: 2.4rem;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 900;
    opacity: 0.6;
  }
`;

export default function BookmarksContainer() {
  const [bookmarked, setBookmarked] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let bookmarks = localStorage.getItem("bookmarks")
      ? JSON.parse(localStorage.getItem("bookmarks"))
      : [];
    setBookmarked(bookmarks);
  }, []);

  useEffect(() => {
    // if (bookmarked.length > 0) {
    //   let articlesArr = [];
    //   bookmarked.forEach((id) => {
    // db.collection("articles")
    //   .where("id", "==", id)
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       articlesArr.push(doc.data());
    //     });
    //   })
    //   .catch((err) => console.err("Unable to fetch articles ❌: " + err));
    //   });
    //   console.log(articlesArr);
    //   setArticles(articlesArr);
    // }

    if (bookmarked.length > 0) {
      let articlesArr = [];
      const getPost = async (id) => {
        const articlesSnap = await db
          .collection("articles")
          .where("id", "==", id)
          .get();

        articlesSnap.forEach((article) => articlesArr.push(article.data()));
        console.log(articlesArr);

        if (articlesArr.lemgth === bookmarked.length) setArticles(articlesArr);
      };

      bookmarked.forEach((id) => getPost(id));
    }
  }, [bookmarked]);

  console.log(articles);
  return (
    <BookmarksWrapper>
      {articles.length === 0 && (
        <>
          <img src={NotFoundImage} alt="Bookmarks not found" />
          <p>No Bookmarks found</p>
        </>
      )}
      {articles.length > 0 &&
        articles.map((article) => <Article data={article} key={article.id} />)}
    </BookmarksWrapper>
  );
}
