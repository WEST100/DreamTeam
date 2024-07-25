import React from "react";
import "./Modal.scss";

const Modal = ({ active, setActive, setResponce, children }) => {
  // добавил children чтобы компонент был переиспользуемый
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
        setResponce && setResponce(false);
      }}
    >
      <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
