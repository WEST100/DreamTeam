import React from "react";
import "./ModalCartOneDayDiscount.scss";

const ModalCartOneDayDiscount = ({ active, setActive, setResponce, children }) => {
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

export default ModalCartOneDayDiscount;
