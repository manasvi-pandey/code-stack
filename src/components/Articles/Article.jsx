import styled from "styled-components";
import { Link } from "react-router-dom";

const ArticleWrapper = styled.div`
  margin-top: 2.4rem;
  display: flex;

  .image {
    height: 8rem;
    width: 8rem;
    background: var(--color-3);
    border-radius: 1rem;
  }

  .content {
    margin-left: 2.4rem;

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
    }
  }
`;
export default function Article({ data }) {
  return (
    <ArticleWrapper>
      <div className="image"></div>
      <div className="content">
        <p className="content__category">{data.category}</p>
        <Link to="/blog/single-blog-title-slug" className="content__title">
          {data.title}
        </Link>
        <p className="content__author">By: {data.author}</p>
      </div>
    </ArticleWrapper>
  );
}
