import { useContext } from "react";
import NavbarWrapper from "./Navbar.styles";
import ProfilePhoto from "../shared/ProfilePhoto/ProfilePhoto";
import { AuthContext } from "../../store/auth-context";

export default function Navbar() {
  const { handleProfile, authUser } = useContext(AuthContext);
  return (
    <NavbarWrapper>
      <h1 className="logo">
        <span className="logo__first">Code</span>
        <span className="logo__second">Stack</span>
      </h1>
      <ProfilePhoto
        height="50px"
        width="50px"
        imgURL={authUser?.uid ? authUser.photoURL : ""}
        cta={handleProfile}
      />
    </NavbarWrapper>
  );
}
