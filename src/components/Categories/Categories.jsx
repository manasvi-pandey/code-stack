import { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoriesArr = [];
    db.collection("categories")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          categoriesArr.push(doc.data());
        });

        setCategories(categoriesArr);
      })
      .catch((err) => console.err("Unable to fetch categories ❌: " + err));
  }, []);

  function setAsSelected(option) {
    setSelected(option);
  }

  return (
    <CategoriesWrapper>
      <div className="category-container">
        {categories.map((category) => (
          <Category
            name={category.name}
            key={category.id}
            selected={selected === category.name}
            selectOption={() => setAsSelected(category.name)}
          />
        ))}
      </div>
    </CategoriesWrapper>
  );
}
