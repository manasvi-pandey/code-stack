import NavbarWrapper from "./Navbar.styles";
import ProfilePhoto from "../shared/ProfilePhoto/ProfilePhoto";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <ion-icon name="menu"></ion-icon>
      <ProfilePhoto />
    </NavbarWrapper>
  );
}
