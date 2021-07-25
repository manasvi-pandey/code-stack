import ButtonWrapper from "./Button.styles";

export default function Button({ additionalStyles, children, cta }) {
  return (
    <ButtonWrapper additionalStyles={additionalStyles} onClick={cta}>
      {children}
    </ButtonWrapper>
  );
}
