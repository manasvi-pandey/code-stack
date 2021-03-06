import { useContext, useState } from "react";
import styled from "styled-components";
import Categories from "../components/Categories/Categories";
import Articles from "../components/Articles/Articles";
import { AuthContext } from "../store/auth-context";

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

const HomeContainerWrapper = styled.div`
  min-height: 85vh;
`;

export default function HomeContainer() {
  const { authUser } = useContext(AuthContext);
  const [selected, setSelected] = useState("All");

  const d = new Date();
  const time = d.getHours();
  let greeting = "Morning";

  if (time > 12 && time < 16) {
    greeting = "Afternoon";
  } else if (time > 16) {
    greeting = "Evening";
  }

  function setAsSelected(option) {
    setSelected(option);
  }

  return (
    <HomeContainerWrapper>
      <GreetingsWrapper>
        <h1>Good {greeting}!</h1>
        <p>
          How are you,{" "}
          {authUser?.uid ? authUser.displayName.split(" ")[0] : "Coder"} ?
        </p>
      </GreetingsWrapper>
      <Categories selected={selected} setAsSelected={setAsSelected} />
      <Articles selectedCategory={selected} />
    </HomeContainerWrapper>
  );
}
