import FooterWrapper from "./Footer.styles";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterWrapper>
      <Link to="/home">
        <ion-icon name="home"></ion-icon>
      </Link>
      <Link to="/bookmarks">
        <ion-icon name="bookmark"></ion-icon>
      </Link>
      <div className="edit-icon">
        <ion-icon name="create"></ion-icon>
      </div>
      <Link to="/about">
        <ion-icon name="information-circle"></ion-icon>
      </Link>
      <Link to="/profile">
        <ion-icon name="person"></ion-icon>
      </Link>
    </FooterWrapper>
  );
}
