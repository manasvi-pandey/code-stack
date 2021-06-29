import ButtonWrapper from "./Button.styles";

export default function Button({ additionalStyles, children }) {
  return (
    <ButtonWrapper additionalStyles={additionalStyles}>
      {children}
    </ButtonWrapper>
  );
}
