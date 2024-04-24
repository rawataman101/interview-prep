import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <h1>Click here to open Modal</h1>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
        className="openButton"
      >
        Open
      </button>
      {openModal && <ModalView closeModal={setOpenModal} />}
    </div>
  );
}

function ModalView({ closeModal }) {
  return (
    <div>
      <div className="modal__background">
        <div className="modal__container">
          <div className="closeButton">
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <div className="title">
            <h1>Are you sure you want to continue?</h1>
          </div>
          <div className="body">
            <p>
              The next page is awesome! You should move forward, you will enjoy
              it.
            </p>
          </div>
          <div className="footer">
            <button onClick={() => closeModal(false)} id="cancelButton">
              cancel
            </button>
            <button>continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
