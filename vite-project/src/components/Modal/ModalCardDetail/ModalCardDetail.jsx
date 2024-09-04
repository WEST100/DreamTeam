import React from "react";
import "./ModalCardDetail.scss";

const ModalCardDetail = ({ active, setActive, setResponce, children }) => {
  // добавил children чтобы компонент был переиспользуемый
  return (
    <div
      className={active ? "modal2 active" : "modal2"}
      onClick={() => {
        setActive(false);
        setResponce && setResponce(false);
      }}
    >
      <div className={active ? "modal2__content active" : "modal2__content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalCardDetail;
