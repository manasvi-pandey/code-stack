import { useContext } from "react";
import NavbarWrapper from "./Navbar.styles";
import ProfilePhoto from "../shared/ProfilePhoto/ProfilePhoto";
import { useHistory } from "react-router";
import { AuthContext } from "../../store/auth-context";

export default function Navbar() {
  const { handleLogin, authUser } = useContext(AuthContext);
  const history = useHistory();

  function handleProfile() {
    authUser?.uid ? history.push("/profile") : handleLogin();
  }

  return (
    <NavbarWrapper>
      <h1 className="logo">
        <span className="logo__first">Code</span>
        <span className="logo__second">Stack</span>
      </h1>
      <ProfilePhoto height="50px" width="50px" cta={handleProfile} />
    </NavbarWrapper>
  );
}
