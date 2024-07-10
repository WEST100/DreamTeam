import React, { useEffect } from "react";
import "./ProductCardDetail.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCardDetailAction } from "../../../store/asyncActions/product";
import "./ProductCardDetail.scss";
import { getAllCategoriesAction } from "../../../store/asyncActions/categorie";
import Quantity from "../../Quantity/Quantity";


const ProductCardDetail = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const { product, isLoading } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getProductsCardDetailAction(productId));
    dispatch(getAllCategoriesAction());
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
            <div className="product-single" key={product?.id}>
              <img src={`https://exam-server-5c4e.onrender.com${product?.image}`} alt="product-image" className="product-single__image" />
              <div className="product-single__details">
                <h2 className="product-single__title">{product?.title}</h2>
                <div className="product-single__price">
                  <h3>${product?.price}</h3>
                  <h6>
                    {product?.discont_price > 0 ? `$${product?.discont_price}` : product?.discont_price}
                    <span>-17%</span>
                  </h6>
                </div>
                <div className="product-single__actions">
                  <Quantity/>
                  <button className="btn">Add to cart</button>
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
    </div>
  );
};

export default ProductCardDetail;
