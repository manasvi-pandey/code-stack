import { useEffect, useState } from "react";
import { db } from "../firebase";
import ArticlesWrapper from "../components/Articles/Articles.style";
import Article from "../components/Articles/Article";
import NotFoundImage from "../assets/bookmarks_not_found.svg";

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
    if (bookmarked.length > 0) {
      let articlesArr = [];
      const getPost = async (id) => {
        const articlesSnap = await db
          .collection("articles")
          .where("id", "==", id)
          .get();

        articlesSnap.forEach((article) => articlesArr.push(article.data()));
        console.log(articlesArr);

        if (articlesArr.length === bookmarked.length) setArticles(articlesArr);
      };

      bookmarked.forEach((id) => getPost(id));
    }
  }, [bookmarked]);

  return (
    <ArticlesWrapper>
      {articles.length === 0 && (
        <div className="noBookmarksImageContainer">
          <img src={NotFoundImage} alt="Bookmarks not found"/>
          <p>No Bookmarks found</p>
        </div>
      )}
      {articles.length > 0 &&
        articles.map((article) => <Article data={article} key={article.id} />)}
    </ArticlesWrapper>
  );
}
