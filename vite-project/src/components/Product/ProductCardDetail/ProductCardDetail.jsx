import React, { useEffect } from "react";
import "./ProductCardDetail.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCardDetailAction } from "../../../store/asyncActions/product";
import "./ProductCardDetail.scss";
import { getAllCategoriesAction } from "../../../store/asyncActions/categorie";

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
              </div>
              <p>{product?.price}</p>
              <p>{product?.discont_price}</p>
              <p>{product?.description}</p>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default ProductCardDetail;
