import styled from "styled-components";
import Article from "./Article";

const ArticlesWrapper = styled.div`
  margin-top: 1.6rem;
  padding: 2rem 2rem 0 2rem;
  font-family: "Noto Sans JP", sans-serif;

  h1 {
    letter-spacing: 0.6px;
  }
`;

export default function Articles() {
  return (
    <ArticlesWrapper>
      <h1>Recent Articles</h1>
      <Article
        data={{
          category: "JavaScript",
          title: "Array methods in JavaScript",
          author: "Manasvi Pandey",
        }}
      />
      <Article
        data={{
          category: "TypeScript",
          title: "Understanding ENUMS in TS",
          author: "Mann",
        }}
      />
      <Article
        data={{
          category: "PHP",
          title: "What's new in PHP 8.0",
          author: "Random Person",
        }}
      />
      <Article
        data={{
          category: "ReactJS",
          title: "My ReactJS journey",
          author: "Manasvi Pandey",
        }}
      />
    </ArticlesWrapper>
  );
}
