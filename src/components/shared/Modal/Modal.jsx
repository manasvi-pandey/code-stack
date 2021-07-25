import ReactDOM from "react-dom";
import ModalWrapper from "./Modal.styles";

export default function Modal({ children, modalVisibility, closeModal }) {
  document.querySelector("body").style.overflow = "hidden";

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
