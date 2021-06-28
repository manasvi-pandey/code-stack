import FooterWrapper from "./Footer.styles";

export default function Footer() {
  return (
    <FooterWrapper>
      <ion-icon name="home"></ion-icon>
      <ion-icon name="bookmark"></ion-icon>
      <div className="edit-icon">
        <ion-icon name="create"></ion-icon>
      </div>
      <ion-icon name="notifications"></ion-icon>
      <ion-icon name="person"></ion-icon>
    </FooterWrapper>
  );
}
