import { useContext } from "react";
import styled from "styled-components";
import ProfilePhoto from "../shared/ProfilePhoto/ProfilePhoto";

import { Link } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

const ArticleWrapper = styled.div`
  margin-top: 2.4rem;
  display: flex;
  align-items: flex-start;

  .image {
    height: 8rem;
    width: 8rem;
    border-radius: 1rem;
    flex-shrink: 0;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .content {
    margin-left: 2.4rem;
    flex: 1;

    &__category {
      color: var(--color-gray-3);
      font-size: 1.3rem;
    }

    &__title {
      font-size: 1.6rem;
      font-weight: 700;
      text-decoration: none;
      color: #000;
    }

    .title_and_action {
      display: flex;
      align-items: center;

      ion-icon {
        margin-left: 0.8rem;
        margin-top: 0.4rem;
        color: var(--color-2);
        font-size: 1.4rem;
      }
    }

    &__author {
      margin-top: 0.6rem;
      color: var(--color-gray-3);
      font-size: 1.3rem;
      display: flex;

      p {
        margin-left: 1rem;
      }
    }
  }
`;
export default function Article({ data }) {
  const { authUser } = useContext(AuthContext);

  return (
    <ArticleWrapper>
      <div className="image">
        <img src={data.image} alt="blog" />
      </div>
      <div className="content">
        <p className="content__category">{data.category}</p>
        <div className="title_and_action">
          <Link to={`/blog/${data.slug}`} className="content__title">
            {data.title}{" "}
          </Link>
          {data.author_id === authUser?.uid && (
            <Link to={`/create/${data.id}`}>
              <ion-icon name="create"></ion-icon>
            </Link>
          )}
        </div>
        <div className="content__author">
          <ProfilePhoto height="20px" width="20px" imgURL={data.author_photo} />
          <p>{data.author}</p>
        </div>
      </div>
    </ArticleWrapper>
  );
}
