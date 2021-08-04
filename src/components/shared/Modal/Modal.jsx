import { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalWrapper from "./Modal.styles";

export default function Modal({ children, modalVisibility, closeModal }) {
  useEffect(() => {
    modalVisibility
      ? (document.querySelector("body").style.overflow = "hidden")
      : (document.querySelector("body").style.overflow = "visible");
  }, [modalVisibility]);

  return (
    modalVisibility &&
    ReactDOM.createPortal(
      <ModalWrapper>
        <div className="modal-container">
          <div className="modal">
            <div className="modal-button__close">
              <ion-icon name="close" onClick={closeModal}></ion-icon>
            </div>
            {children}
          </div>
        </div>
      </ModalWrapper>,
      document.getElementById("modal")
    )
  );
}
