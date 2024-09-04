import React, { useContext, useEffect, useState } from "react";
import "./ProductCardDetail.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCardDetailAction } from "../../../store/asyncActions/product";
import "./ProductCardDetail.scss";
import { getAllCategoriesAction } from "../../../store/asyncActions/categorie";
import { addProductToCart, incrementProduct, decrementProduct, removeProductFromCart, removeProductFromFavorites, addFavoritesProducts } from "../../../store/Reducers/ProductsReducer";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { ThemeContext } from "../../Theme/ThemeContext";
import Button from "../../Buttons/Button";
import Modal from "../../Modal/Modal/Modal";
import ModalCardDetail from "../../Modal/ModalCardDetail/ModalCardDetail";

const ProductCardDetail = () => {
  const dispatch = useDispatch();

  // состояние отвечающее за видимость модального окна
  const [modalActive, setModalActive] = useState(false);

  // получаем айди продукта из ссылки
  const { productId } = useParams();

  // тема страницы
  const { theme } = useContext(ThemeContext);

  // UseSelectors
  const { product, isLoading, cartProducts } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const { favoritesProducts } = useSelector((state) => state.products);

  // UseStates
  const [count, setCount] = useState(0);
  const [isReadMe, setIsReadMe] = useState(true);

  // отправляем id продукта и список категорий
  useEffect(() => {
    dispatch(getProductsCardDetailAction(productId));
    dispatch(getAllCategoriesAction());
  }, [productId]);

  // изменение счетчика товаров
  useEffect(() => {
    let cartFound = cartProducts.find((item) => item.id === product?.id);
    if (cartFound) {
      setCount(cartFound.count);
    } else {
      setCount(0);
    }
  }, [cartProducts, product]);

  // укорачиваем длину текста
  const shortText = (text, length) => {
    return text?.length > length ? `${text.slice(0, length)} ...` : text;
  };

  // функция сравнения при клике на сердечко, если продукт есть в избранном то удаляем, если нету то добавляем
  function compareProductsFromFavorites() {
    let foundProduct = favoritesProducts.find((item) => item.id === product.id);

    if (favoritesProducts.length > 0) {
      if (foundProduct) {
        dispatch(removeProductFromFavorites(product));
      } else {
        dispatch(addFavoritesProducts(product));
      }
    } else {
      dispatch(addFavoritesProducts(product));
    }
  }

  // функция заполнения цвета сердечка
  function IsColoredHeartFill() {
    let foundProduct = favoritesProducts.find((item) => item.id === product.id);

    if (favoritesProducts.length > 0) {
      if (foundProduct && !theme) {
        return "#92a134";
      } else if (!foundProduct && theme) {
        return "#424436";
      } else if (foundProduct && theme) {
        return "#92a134";
      } else if (!foundProduct && !theme) {
        return "white";
      }
    }

    if (favoritesProducts.length === 0) {
      if (!foundProduct && theme) {
        return "#424436";
      }
      if (!foundProduct && !theme) {
        return "white";
      }
    }
  }

  // функция заполнения цветом - оконтовки сердечка
  function IsColoredHeartStroke() {
    let foundProduct = favoritesProducts.find((item) => item.id === product.id);

    if (favoritesProducts.length > 0) {
      if (foundProduct && !theme) {
        return "#92a134";
      } else if (!foundProduct && theme) {
        return "white";
      } else if (foundProduct && theme) {
        return "#92a134";
      } else if (!foundProduct && !theme) {
        return "#424436";
      }
    }

    if (favoritesProducts.length === 0) {
      if (!foundProduct && theme) {
        return "white";
      }
      if (!foundProduct && !theme) {
        return "#424436";
      }
    }
  }

  // функция подсчета цены
  function priceCalculate() {
    if (product?.discont_price > 0) {
      if (count === 0) {
        return (product?.discont_price).toFixed(2);
      } else {
        return (product?.discont_price * count).toFixed(2);
      }
    } else if (product?.discont_price === null) {
      if (count === 0) {
        return (product?.price).toFixed(2);
      } else {
        return (product?.price * count).toFixed(2);
      }
    } else {
      return (product?.price).toFixed(2);
    }
  }

  // функция подсчета перечеркнутой цены
  function crossedOutPriceCalculate() {
    if (product?.discont_price > 0) {
      if (count === 0) {
        return (product?.price).toFixed(2);
      } else {
        return (product?.price * count).toFixed(2);
      }
    } else {
      return "";
    }
  }

  return (
    <section className={`detailedProductPage ${theme ? "detailedProductPage-dark" : "detailedProductPage-light"}`}>
      <div className="container">
        <div className="breadcrumbs__navigation">
          <button className="breadcrumbs__button">
            <Link to={"/"}>Main page</Link>
          </button>
          <span>—</span>
          <button className="breadcrumbs__button">
            <Link to={"/categories"}>Categories</Link>
          </button>
          <span>—</span>
          <button className="breadcrumbs__button">
            <Link to={`/categories/${product?.categoryId}`}>{categories && categories.map((item) => (item.id === product?.categoryId ? item.title : ""))}</Link>
          </button>
          <span>—</span>
          <button className="breadcrumbs__button">{product?.title}</button>
        </div>
        <div className="productContainer">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            product && (
              <div className="product-single" key={product?.id}>
                <img src={`https://exam-server-5c4e.onrender.com${product?.image}`} alt="product-image" className="product-single__image" onClick={() => setModalActive(true)} />
                <div className="product-single__details">
                  <div className="product-single__details__topContainer">
                    <h2 className="product-single__title">{product?.title}</h2>

                    <svg onClick={compareProductsFromFavorites} className="heart" width="48" height="41" viewBox="0 0 48 41" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.4 25.2222C42.678 22.14 46 18.4456 46 13.6111C46 10.5317 44.7252 7.57832 42.456 5.40082C40.1868 3.22331 37.1091 2 33.9 2C30.028 2 27.3 3.05556 24 6.22222C20.7 3.05556 17.972 2 14.1 2C10.8909 2 7.8132 3.22331 5.54401 5.40082C3.27482 7.57832 2 10.5317 2 13.6111C2 18.4667 5.3 22.1611 8.6 25.2222L24 40L39.4 25.2222Z" fill={IsColoredHeartFill()} stroke={IsColoredHeartStroke()} />
                    </svg>
                  </div>

                  <div className="product-single__price">
                    <h3>${priceCalculate()}</h3>
                    <h6>
                      {crossedOutPriceCalculate()}
                      {product.discont_price ? <span>{product.discont_price ? `${Math.round((product.discont_price / product.price) * 100 - 100)}%` : ""}</span> : ""}
                    </h6>
                  </div>
                  <div className="product-single__actions">
                    {count > 0 && (
                      <div className="quantity">
                        <button onClick={() => dispatch(decrementProduct(product?.id))} className="quantity__action">
                          <FaMinus />
                        </button>
                        <input type="text" value={count} disabled className="quantity__input" />
                        <button onClick={() => dispatch(incrementProduct(product?.id))} className="quantity__action">
                          <FaPlus />
                        </button>
                      </div>
                    )}

                    {count > 0 ? (
                      // <Button name={"Remove from cart"} dispatch={dispatch(removeProductFromCart(product))} />
                      <button className="btn" onClick={() => dispatch(removeProductFromCart(product))}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn" onClick={() => dispatch(addProductToCart(product))}>
                        Add to cart
                      </button>
                      // <Button name={"Add to cart"} newDispatch={product} />
                    )}
                  </div>
                  <div className="description">
                    <h3 className="description__title">Description</h3>
                    <p className="description__text">{isReadMe ? shortText(product?.description, 450) : product?.description}</p>
                    {product?.description.length > 450 ? (
                      <p onClick={() => setIsReadMe(!isReadMe)} className="description__more">
                        {isReadMe ? "Read more" : "Hide description"}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        {modalActive && (
          <ModalCardDetail active={modalActive} setActive={setModalActive}>
            <img src={`https://exam-server-5c4e.onrender.com${product?.image}`} alt="product-image" />
          </ModalCardDetail>
        )}
      </div>
    </section>
  );
};

export default ProductCardDetail;
