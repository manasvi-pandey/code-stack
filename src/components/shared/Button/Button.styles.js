import styled from "styled-components";

const ButtonWrapper = styled.button`
  background: var(--color-2);
  border: none;
  padding: 1rem 1.2rem;
  border-radius: 2rem;
  color: #fff;

  ${({ additionalStyles }) => additionalStyles}
`;

export default ButtonWrapper;
