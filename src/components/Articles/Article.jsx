import styled from "styled-components";

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
        <h3 className="content__title">{data.title}</h3>
        <p className="content__author">By: {data.author}</p>
      </div>
    </ArticleWrapper>
  );
}
