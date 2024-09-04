import React from "react";
import "./Modal.scss";
import { useDispatch } from "react-redux";
import { clearProductsFromCart } from "../../../store/Reducers/ProductsReducer";

const Modal = ({ active, setActive, setResponce, children}) => {
  // добавил children чтобы компонент был переиспользуемый
  const dispatch = useDispatch();

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
        setResponce && setResponce(false);
        // удаление из корзины при клике на серую область
        dispatch(clearProductsFromCart());
      }}
    >
      <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
