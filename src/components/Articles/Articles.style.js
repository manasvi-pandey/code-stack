import styled from "styled-components";

const ArticlesWrapper = styled.div`
  margin-top: 1.6rem;
  padding: 2rem 2rem 20rem 2rem;
  font-family: "Noto Sans JP", sans-serif;
  min-height: 100vh;

  .noBookmarksImageContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;

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
  }

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

export default ArticlesWrapper;
