import { useState } from "react";
import styled from "styled-components";
import Category from "./Category";

const CategoriesWrapper = styled.div`
  margin-top: 0.6rem;
  padding: 0.6rem 1rem 0.6rem 1rem;

  .category-container {
    padding: 1.2rem 0;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export default function Categories() {
  const [selected, setSelected] = useState("TypeScript");
  const [options] = useState(["JavaScript", "TypeScript", "PHP", "ReactJS"]);

  function setAsSelected(option) {
    setSelected(option);
  }

  return (
    <CategoriesWrapper>
      <div className="category-container">
        {options.map((option) => (
          <Category
            name={option}
            key={option}
            selected={selected === option}
            selectOption={() => setAsSelected(option)}
          />
        ))}
      </div>
    </CategoriesWrapper>
  );
}
