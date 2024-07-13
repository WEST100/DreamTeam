import React, { useEffect, useState } from "react";
import "./ProductCardDetail.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCardDetailAction } from "../../../store/asyncActions/product";
import "./ProductCardDetail.scss";
import { getAllCategoriesAction } from "../../../store/asyncActions/categorie";
import Quantity from "../../Quantity/Quantity";
import { addProductToCart, incrementProduct, decrementProduct, removeProductFromCart } from "../../../store/Reducers/ProductsReducer";
import minus from "/src/assets/images/minus.png";
import plus from "/src/assets/images/plus.png";

const ProductCardDetail = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const { product, isLoading, cartProducts } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getProductsCardDetailAction(productId));
    dispatch(getAllCategoriesAction());
  }, [productId]);

  console.log(cartProducts);

  useEffect(() => {
    let cartFound = cartProducts.find((item) => item.id === product?.id);
    if (cartFound) {
      setCount(cartFound.count);
    } else {
      setCount(0);
    }
  }, [cartProducts, product]);

  return (
    <section className="detailedProductPage container">
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
      <section className="productContainer">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          product && (
            <div className="product-single" key={product?.id}>
              <img src={`https://exam-server-5c4e.onrender.com${product?.image}`} alt="product-image" className="product-single__image" />
              <div className="product-single__details">
                <h2 className="product-single__title">{product?.title}</h2>
                <div className="product-single__price">
                  <h3>${count === 0 ? product?.price : product?.price * count}</h3>
                  <h6>
                    {product?.discont_price > 0 ? `$${product?.discont_price}` : product?.discont_price}
                    {product.discont_price ? <span>{product.discont_price ? `${parseInt((product.discont_price / product.price) * 100 - 100)}%` : ""}</span> : ""}
                  </h6>
                </div>
                <div className="product-single__actions">
                  {/* <Quantity /> */}

                  {count > 0 && (
                    <div className="quantity">
                      <button onClick={() => dispatch(decrementProduct(product?.id))} className="quantity__action">
                        <img src={minus} alt="Icon Minus" />
                      </button>
                      <input type="text" value={count} disabled className="quantity__input" />
                      <button onClick={() => dispatch(incrementProduct(product?.id))} className="quantity__action">
                        <img src={plus} alt="Icon Plus" />
                      </button>
                    </div>
                  )}

                  {count > 0 ? (
                    <button className="btn btn-delete-color" onClick={() => dispatch(removeProductFromCart(product))}>
                      Remove from cart
                    </button>
                  ) : (
                    <button className="btn btn-default-color" onClick={() => dispatch(addProductToCart(product))}>
                      + Add to cart
                    </button>
                  )}
                </div>
                <div className="description">
                  <h3 className="description__title">Description</h3>
                  <p className="description__text">{product?.description}</p>
                  <p className="description__more">Read more</p>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </section>
  );
};

export default ProductCardDetail;
