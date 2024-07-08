import React, { useEffect } from "react";
import "./ProductCardDetail.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCardDetailAction } from "../../../store/asyncActions/product";
import "./ProductCardDetail.scss";
import { getAllCategoriesAction } from "../../../store/asyncActions/categorie";
import minus from "/src/assets/images/minus.png";
import plus from "/src/assets/images/plus.png";
import { FiPlus, FiMinus } from "react-icons/fi";


const ProductCardDetail = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const { product, isLoading } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getProductsCardDetailAction(productId));
    dispatch(getAllCategoriesAction());
    console.log(product);
  }, [productId]);

  return (
    <div className="detailedProductPage container">
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
            <div key={product?.id}>
              <img src={`https://exam-server-5c4e.onrender.com${product?.image}`} alt="product-image" />
              <div className="allPagesTitel">
                <h2 className="titleH2">{product?.title}</h2>
          products &&
          products.map((item) => (
            <div className="product-single" key={item.id}>
              <img
                  src={`https://exam-server-5c4e.onrender.com${item.image}`}
                  alt="product-image"
                  className="product-single__image"
                />

              <div className="product-single__details">
                <h2 className="product-single__title">{productTitle()}</h2>

                <div className="product-single__price">
                    <h3>${item.price}</h3>

                    <h6>
                      {item.discont_price > 0
                        ? `$${item.discont_price}`
                        : item.discont_price}

                        <span>-17%</span>
                    </h6>
                </div>

                <div className="product-single__actions">
                  <div className="quantity">
                    <button className="quantity__action"><img src={minus} alt="Icon Minus" /></button>
                    <input type="text" value={1} disabled className="quantity__input"/>
                    <button className="quantity__action"><img src={plus} alt="Icon Plus" /></button>
                  </div>

                  <button className="btn">Add to cart</button>
                </div>

                <div className="description">
                  <h3 className="description__title">Description</h3>

                  <p className="description__text">{item.description}</p>

                  <p className="description__more">Read more</p>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default ProductCardDetail;
