import React from "react";
import "./styles.scss";

type ModalType = {
  open: boolean;
  close: () => void;
  children: JSX.Element;
  title: string;
};
const Modal = ({ open, close, children, title }: ModalType) => {
  if (open) {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{title}</h3>
            <i className="fa fa-times" role="button" onClick={close}></i>
          </div>
          {children}
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
