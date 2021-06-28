import styled from "styled-components";
import Category from "./Category";

const CategoriesWrapper = styled.div`
  margin-top: 1.4rem;
  padding: 0.6rem 1rem 0.6rem 1rem;

  .category-container {
    padding: 0.4rem 0;
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
  return (
    <CategoriesWrapper>
      <div className="category-container">
        <Category name="JavaScript" selected={true} />
        <Category name="PHP" selected={false} />
        <Category name="TypeScript" selected={false} />
        <Category name="ReactJS" selected={false} />
      </div>
    </CategoriesWrapper>
  );
}
