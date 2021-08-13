import { useRef, useState, useContext, useEffect, useCallback } from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import Button from "../components/shared/Button/Button";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../store/auth-context";

const PostActionsWrapper = styled.div`
  padding: 2rem 2rem 10rem 2rem;
  font-family: "Noto Sans JP", sans-serif;
  min-height: 85vh;

  .container_title {
    font-size: 1.6rem;
    font-weight: 900;
  }

  .input_container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    input,
    select,
    textarea {
      padding: 1.2rem;
      margin-top: 2rem;
      border-radius: 2rem;
      border: 1px solid transparent;

      &:focus {
        outline: none;
        border: 1px solid var(--color-2);
      }
    }

    select {
      option {
        border-radius: 2rem;
        cursor: pointer;
      }
    }

    textarea {
      font-family: "Noto Sans JP", sans-serif;

      &::placeholder {
        font-family: inherit;
        font-size: 1.2rem;
      }
    }

    small {
      color: var(--color-1);
      font-size: 1rem;
      font-weight: 700;
      margin-left: 1rem;
    }
  }

  .post_action {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
  }
`;

export default function PostActionsContainer({ match }) {
  const { postID } = match.params;
  const history = useHistory();
  const [formErrors, setFormErrors] = useState({
    title: false,
    category: false,
    body: false,
  });

  /* Default image for each category, will be used if user does not provide an image */
  const defaultPostImages = {
    JavaScript:
      "https://cdn.freebiesupply.com/logos/large/2x/javascript-logo-png-transparent.png",
    TypeScript: "https://bestofjs.org/logos/typescript.svg",
    Laravel:
      "http://gatelogsystems.com/wp-content/uploads/2020/07/laravel-icon.png",
    ReactJS: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    PHP: "https://equestsolutions.net/wp-content/uploads/2014/08/php-logo.jpg",
  };

  const { authUser } = useContext(AuthContext);

  const postTitle = useRef(null);
  const postCategory = useRef(null);
  const postImage = useRef(null);
  const postBody = useRef(null);

  const fetchSinglePost = useCallback(() => {
    db.collection("articles")
      .where("id", "==", postID)
      .get()
      .then((querySnapshot) => {
        querySnapshot.empty && history.push("/");
        querySnapshot.forEach((doc) => {
          postTitle.current.value = doc.data().title;
          postCategory.current.value = doc.data().category;
          postImage.current.value = doc.data().image;
          postBody.current.value = doc.data().body;
        });
      })
      .catch((err) => console.error("Unable to get post for edit ❌: " + err));
  }, [postID, history]);

  useEffect(() => {
    postID && fetchSinglePost(postID);
  }, [fetchSinglePost, postID]);

  function addNewPost() {
    if (runFormValidator()) {
      saveNewPost();
    }
  }

  function saveNewPost() {
    let slug = slugifyTitle(postTitle.current.value);
    let uid = generateUUIDForPost(),
      author = authUser?.displayName,
      authorID = authUser?.uid;

    db.collection("articles")
      .doc(postID ? postID : uid)
      .set({
        author,
        author_id: authorID,
        author_photo: authUser?.photoURL,
        body: postBody.current.value,
        category: postCategory.current.value,
        created_at: new Date(),
        id: uid,
        image:
          postImage.current.value !== ""
            ? postImage.current.value
            : defaultPostImages[postCategory.current.value],
        slug: slugExistsInDB ? newUniqueSlug(slug) : slug,
        title: postTitle.current.value,
      })
      .then(() => {
        console.log("New Post created ✔");
        history.push("/");
      })
      .catch((err) => console.error("Unable to add Post ❌: " + err));
  }

  function generateUUIDForPost() {
    return uuidv4();
  }

  function slugExistsInDB(slug) {
    db.collection("articles")
      .where("slug", "==", slug)
      .get()
      .then((querySnapshot) => {
        return querySnapshot.empty ? true : false;
      })
      .catch((err) =>
        console.error("Unable to check for slug existence ❌: " + err)
      );
  }

  function newUniqueSlug(slug) {
    let uniqueNumber = Math.floor(Math.random() * 90000) + 10000;
    return slug + "-" + uniqueNumber;
  }

  function slugifyTitle(title) {
    return title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
  }

  function runFormValidator() {
    setFormErrors({ title: false, category: false, body: false });
    if (postTitle.current.value === "") {
      setError("title");
      return false;
    }

    if (postCategory.current.value === "") {
      setError("category");
      return false;
    }

    if (postBody.current.value === "") {
      setError("body");
      return false;
    }

    return true;
  }

  function setError(key) {
    setFormErrors((prev) => ({ ...prev, [key]: true }));
  }

  return (
    <PostActionsWrapper>
      <div className="container_title">
        <h1>Create a new Post</h1>
      </div>
      <div className="input_container">
        <input
          type="text"
          placeholder="Title for you post"
          ref={postTitle}
          style={{ borderColor: formErrors.title ? "red" : "inherit" }}
        />
        <select
          ref={postCategory}
          style={{ borderColor: formErrors.category ? "red" : "inherit" }}
        >
          <option value="">Select a category</option>
          <option value="Laravel">Laravel</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="PHP">PHP</option>
          <option value="ReactJS">ReactJS</option>
        </select>
        <input
          type="text"
          placeholder="Relevant image link related to post"
          id="post-image"
          ref={postImage}
          style={{ borderColor: "inherit" }}
        />
        <small>Image should be of size 50X50 for best fit (optional)</small>
        <textarea
          placeholder="Write a brief post body here"
          rows="10"
          ref={postBody}
          style={{ borderColor: formErrors.body ? "red" : "inherit" }}
        ></textarea>
        <div className="post_action">
          <Button
            cta={() => {
              history.goBack();
            }}
          >
            Go back
          </Button>
          <Button additionalStyles={{ marginLeft: ".6rem" }} cta={addNewPost}>
            {postID ? "Update post" : "Create new post"}
          </Button>
        </div>
      </div>
    </PostActionsWrapper>
  );
}
