import styled from "styled-components";
import ProfilePhoto from "../shared/ProfilePhoto/ProfilePhoto";

import { Link } from "react-router-dom";

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
  return (
    <ArticleWrapper>
      <div className="image">
        <img src={data.image} alt="blog" />
      </div>
      <div className="content">
        <p className="content__category">{data.category}</p>
        <Link to="/blog/single-blog-title-slug" className="content__title">
          {data.title}
        </Link>
        <div className="content__author">
          <ProfilePhoto height="20px" width="20px" />
          <p>{data.author}</p>
        </div>
      </div>
    </ArticleWrapper>
  );
}
