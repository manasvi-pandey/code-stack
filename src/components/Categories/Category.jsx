import styled, { css } from "styled-components";
import Skeleton from "react-loading-skeleton";

const CategoryWrapper = styled.div`
  padding: 1.2rem 1.6rem;
  margin-left: 2rem;
  font-size: 0.7rem;
  font-family: "Noto Sans JP", sans-serif;
  border-radius: 2rem;
  box-shadow: var(--shadow-primary);
  transition: all 0.3s;

  ${({ selected }) =>
    selected &&
    css`
      color: #fff;
      background: var(--color-1);
      transform: scale(1.1);
    `}
`;
export default function Category({ name, selected, selectOption }) {
  return (
    <CategoryWrapper selected={selected} onClick={selectOption}>
      <h1>{name || <Skeleton height={30} width={70} />}</h1>
    </CategoryWrapper>
  );
}
