import React from "react";
import "./Modal.scss";

const ModalCart = ({ active, setActive, setResponce, children }) => {
  // добавил children чтобы компонент был переиспользуемый
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
        setResponce(false);
      }}
    >
      <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalCart;
