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

  const { products, isFetching } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getProductsCardDetailAction(productId));
  }, [productId]);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

  let productTitle = () => {
    let prod = "";
    for (let key in products) {
      prod = products[key].title;
    }
    return prod;
  };

  let getCategoryId = () => {
    let prod = "";
    for (let key in products) {
      prod = products[key].categoryId;
    }
    return prod;
  };

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
          <Link to={`/categories/${getCategoryId()}`}>
            {categories &&
              categories.map((item) =>
                item.id === getCategoryId() ? item.title : ""
              )}
          </Link>
        </button>
        <span>—</span>
        <button className="breadcrumbs__button">{productTitle()}</button>
      </div>
      <section>
        {isFetching ? (
          <p>Please, wait...</p>
        ) : (
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
          ))
        )}
      </section>
    </div>
  );
};

export default ProductCardDetail;
