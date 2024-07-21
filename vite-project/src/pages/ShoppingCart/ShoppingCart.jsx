import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../components/Theme/ThemeContext";
import "./ShoppingCart.scss";
import { useSelector } from "react-redux";
import ProductCart from "../../components/Product/ProductCart/ProductCart";
import Button from "../../components/Buttons/Button";
import {useForm} from 'react-hook-form'

const ShoppingCart = () => {

  //создание хука useForm
  const { register, handleSubmit} = useForm({
    defaultValues: {
        name: '',
        phone: '',
        email: '',
    }
});

// создаем ф-ю onSubmit и вешаем ее на форму
const onSubmit = data => {
 
// отправка данных на сервер
  const fetchApi = async () => {
    const res = await fetch("https://exam-server-5c4e.onrender.com/order/send", {
      method: "POST",
      body:JSON.stringify({...data, order: cartProducts.map(item => (`${item.title} * ${item.count} - ${item.price}`)).join(",")}), 

    });
    const results = await res.json();

    console.log(result)
    if (!res.ok) {
      throw new Error(results);
    }
  };

  fetchApi()
};


  const { theme } = useContext(ThemeContext);
  const { cartProducts, isLoading } = useSelector((state) => state.products);

  // кнопка назад
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  // проверка на наличие товаров в корзине
  let data = cartProducts.length > 0 ? true : false;

  // подсчет общего кол-ва цены (total price)
  let result = cartProducts.reduce(function (acc, curValue) {
    if (curValue.discont_price > 0) {
      return acc + curValue.discont_price * curValue.count;
    } else {
      return acc + curValue.price * curValue.count;
    }
  }, 0);

  return (
    <section className={`shoppingCart ${theme ? "shoppingCart-dark" : "shoppingCart-light"}`}>
      <div className="container">
        <div className="pageSectionTitle">
          <h2>Shopping cart</h2>
          <hr />
          <button onClick={goBack} className="breadcrumbs__button">
            Back to the store
          </button>
        </div>
        <div className="shop">
          <div className="list">
            {!data ? (
              <div>
                <p className="textNoitems">Looks like you have no items in your basket currently.</p>
                <Button name={"Continue Shopping"} link={"/products"} />
              </div>
            ) : (
              <div className="shop__ListCartContainer">{isLoading ? <div className="loader"></div> : cartProducts && cartProducts.map((prod) => <ProductCart key={prod.id} product={prod} />)}</div>
            )}
          </div>
          {data && (
            <div className="shop__form">
              <div className="shop__form__text">
                <h2>Order details</h2>
                <div className="shop__form__text__frame">
                  <p>{cartProducts.length} items</p>
                  <div className="shop__form__text__frame__price">
                    <p>Total</p>
                    <span>${result}</span>
                  </div>
                </div>
              </div>
              <div className="shop__form__container">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" placeholder="Name" 
                                          {
                                            ...register("name", { 
                                                required: "name is required", 
                                                maxLength: 30,
                                            })
                                        }/>
                  <input type="tel" placeholder="Phone number"       {
                                            ...register("phone", { 
                                                required: "phone is required", 
                                                maxLength: 30,
                                            })
                                        }/>
                  <input type="email" placeholder="e-mail"       {
                                            ...register("email", { 
                                                required: "email is required", 
                                            })
                                        } />
                  <button type="submit">Order</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
