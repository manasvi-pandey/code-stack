import styled from "styled-components";
import Categories from "../components/Categories/Categories";
import Articles from "../components/Articles/Articles";

const GreetingsWrapper = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  padding: 2.4rem;

  h1 {
    font-size: 3.4rem;
    font-weight: 900;
  }

  p {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--color-gray-3);
  }
`;

export default function HomeContainer() {
  return (
    <>
      <GreetingsWrapper>
        <h1>Good Morning!</h1>
        <p>How are you, Mann?</p>
      </GreetingsWrapper>
      <Categories />
      <Articles />
    </>
  );
}
