import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import ProfilePhoto from "../components/shared/ProfilePhoto/ProfilePhoto";
import { db } from "../firebase";

const SingleBlogWrapper = styled.div`
  padding: 2rem 2rem 20rem 2rem;
  margin-top: 2rem;
  font-family: "Noto Sans JP", sans-serif;
  min-height: 85vh;

  .author_details {
    display: flex;
    align-items: center;
  }

  .author {
    margin-left: 1rem;

    &__name {
      font-weight: 700;
      font-size: 1.4rem;
      letter-spacing: 0.01px;
      color: rgba(0, 0, 0, 0.9);
    }

    &__time {
      color: var(--color-gray-3);
    }
  }

  .post_area {
    margin-top: 3.4rem;
    font-family: "Noto Sans JP", sans-serif;

    .title_and_icon {
      display: flex;
      align-items: center;

      svg {
        margin-left: 1rem;
        margin-top: 0.6rem;
        height: 2.4rem;
        width: 2.4rem;
      }
    }

    .post_area-title {
      font-size: 2.8rem;
      font-weight: 900;
      color: rgba(0, 0, 0, 0.8);
    }

    .post_area-image {
      margin-top: 2.2rem;
      width: 100%;
      max-width: 40rem;
      border-radius: 1rem;

      img {
        width: 100%;
        border-radius: inherit;
      }
    }

    .post_area-text {
      font-size: 1.3rem;
      margin-top: 1.6rem;
      padding: 2rem;
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .post_stats {
    margin-top: 1rem;
    padding: 1rem;
    color: rgba(0, 0, 0, 0.6);
    font-family: "Noto Sans JP", sans-serif;
    display: flex;

    &-likes {
      display: flex;
      align-items: center;
      font-size: 1.5rem;

      ion-icon {
        margin-left: 0.5rem;
      }
    }

    &-views {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      margin-left: 2rem;

      ion-icon {
        margin-left: 0.5rem;
      }
    }
  }
`;

export default function SingleBlogContainer({ match }) {
  const history = useHistory();
  const { slug } = match.params;
  const [post, setPost] = useState([]);
  const [loader, setLoader] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);

  const getRelatedCategoryData = useCallback(
    (category) => {
      db.collection("categories")
        .where("name", "==", category)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            setCategoryData(querySnapshot.docs[0].data());
            setLoader(false);
          } else {
            history.push("/");
          }
        })
        .catch((err) =>
          console.error("Unable to get category details ❌: " + err)
        );
    },
    [history]
  );

  const fetchSinglePostData = useCallback(() => {
    db.collection("articles")
      .where("slug", "==", slug)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          setPost(querySnapshot.docs[0].data());
          getRelatedCategoryData(querySnapshot.docs[0].data().category);
        } else {
          history.push("/");
        }
      })
      .catch((err) => console.error("Unable to fetch Post details ❌: " + err));
  }, [slug, history, getRelatedCategoryData]);

  useEffect(() => {
    fetchSinglePostData();
  }, [fetchSinglePostData]);

  useEffect(() => {
    const bookmarksArr = localStorage.getItem("bookmarks")
      ? JSON.parse(localStorage.getItem("bookmarks"))
      : [];

    if (bookmarksArr.includes(post.id)) {
      setBookmarked(true);
    } else {
      setBookmarked(false);
    }
  }, [post]);

  function toggleBookmark() {
    if (bookmarked) {
      removeFromBookmarks();
    } else {
      addToBookmarks();
    }
  }

  function removeFromBookmarks() {
    let bookmarks = localStorage.getItem("bookmarks")
      ? JSON.parse(localStorage.getItem("bookmarks"))
      : [];
    let index = bookmarks.indexOf(post.id);
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    setBookmarked(false);
  }

  function addToBookmarks() {
    let bookmarks = localStorage.getItem("bookmarks")
      ? JSON.parse(localStorage.getItem("bookmarks"))
      : [];
    let index = bookmarks.indexOf(post.id);
    if (index === -1) {
      bookmarks.push(post.id);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      setBookmarked(true);
    }
  }

  function getNumberOfDaysSincePosted(date) {
    let oneDay = 24 * 60 * 60 * 1000;
    let doj = date;
    let currentDate = new Date();

    return Math.round(Math.abs((doj - currentDate) / oneDay)) === 0
      ? "posted today"
      : "posted " +
          Math.round(Math.abs((doj - currentDate) / oneDay)) +
          " day(s) ago";
  }

  return (
    <SingleBlogWrapper>
      <div className="author_details">
        <ProfilePhoto height="40px" width="40px" imgURL={post.author_photo} />
        <div className="author">
          <p className="author__name">{post.author}</p>
          <p className="author__time">
            {getNumberOfDaysSincePosted(
              new Date(post.created_at?.seconds * 1000)
            )}
          </p>
        </div>
      </div>
      <div className="post_area">
        <div className="title_and_icon">
          <h1 className="post_area-title">{post.title}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill={bookmarked ? "var(--color-1)" : "var(--color-gray-3)"}
            onClick={toggleBookmark}
          >
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
        </div>
        <div className="post_area-image">
          {loader && (
            <div className="loader-container">
              <Loader type="ThreeDots" color="#6a89cc" height={40} width={40} />
            </div>
          )}
          {!loader && <img src={categoryData.hero} alt="post" />}
        </div>
        <div className="post_area-text">{post.body}</div>
      </div>
      {/* <div className="post_stats">
        <div className="post_stats-likes">
          <p>3</p>
          <ion-icon name="heart-empty"></ion-icon>
        </div>
        <div className="post_stats-views">
          <p>100</p>
          <ion-icon name="eye"></ion-icon>
        </div>
      </div> */}
    </SingleBlogWrapper>
  );
}
