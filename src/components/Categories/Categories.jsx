import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
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

    .skeleton-section {
      display: flex;
    }
  }

  .loader-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;
export default function Categories({ selected, setAsSelected }) {
  const [loader, setLoader] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoriesArr = [];
    setLoader(true);
    db.collection("categories")
      .orderBy("order", "asc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          categoriesArr.push(doc.data());
          setLoader(false);
        });

        setCategories(categoriesArr);
      })
      .catch((err) => console.err("Unable to fetch categories ❌: " + err));
  }, []);

  return (
    <CategoriesWrapper>
      <div className="category-container">
        {loader && (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#6a89cc" height={40} width={40} />
          </div>
        )}
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
