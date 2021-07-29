import { useContext, useState } from "react";
import { AuthContext } from "../../store/auth-context";

import FooterWrapper from "./Footer.styles";
import Modal from "../shared/Modal/Modal";
import Button from "../shared/Button/Button";
import { Link } from "react-router-dom";

export default function Footer() {
  const { authUser, handleProfile } = useContext(AuthContext);
  const [modalVisibility, setModalVisibility] = useState(false);

  function openLoginConfirmationModal() {
    setModalVisibility(true);
  }

  function closeLoginConfimationModal() {
    setModalVisibility(false);
  }

  return (
    <>
      <FooterWrapper>
        <Link to="/home">
          <ion-icon name="home"></ion-icon>
        </Link>
        <Link to="/bookmarks">
          <ion-icon name="bookmark"></ion-icon>
        </Link>
        <div className="edit-icon">
          {authUser?.uid ? (
            <Link to="/create">
              <ion-icon name="create"></ion-icon>
            </Link>
          ) : (
            <ion-icon
              name="create"
              onClick={openLoginConfirmationModal}
            ></ion-icon>
          )}
        </div>
        <Link to="/about">
          <ion-icon name="information-circle"></ion-icon>
        </Link>
        <ion-icon name="person" onClick={handleProfile}></ion-icon>
      </FooterWrapper>

      <Modal
        modalVisibility={modalVisibility}
        closeModal={closeLoginConfimationModal}
      >
        <div className="modal-title">Login to Continue</div>
        <div className="modal-body">
          You must be logged in to create a new Blog Post. Code Stack provides
          secure Google authentication that sets you up within seconds
        </div>
        <div className="modal-buttons">
          <Button additionalStyles={{ display: "flex", alignItems: "center" }}>
            <ion-icon name="logo-google"></ion-icon> Sign-in
          </Button>
          <Button
            additionalStyles={{ marginLeft: ".6rem" }}
            cta={closeLoginConfimationModal}
          >
            Maybe later
          </Button>
        </div>
      </Modal>
    </>
  );
}
