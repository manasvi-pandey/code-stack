import NavbarWrapper from "./Navbar.styles";
import ProfilePhoto from "../shared/ProfilePhoto/ProfilePhoto";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <h1 className="logo">
        <span className="logo__first">Code</span>
        <span className="logo__second">Stack</span>
      </h1>
      <ProfilePhoto />
    </NavbarWrapper>
  );
}
