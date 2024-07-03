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

  const { products, isLoading } = useSelector((state) => state.products);
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
          <Link to={`/categories/${getCategoryId()}`}>{categories && categories.map((item) => (item.id === getCategoryId() ? item.title : ""))}</Link>
        </button>
        <span>—</span>
        <button className="breadcrumbs__button">{productTitle()}</button>
      </div>
      <section className="productContainer">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          products &&
          products.map((item) => (
            <div key={item.id}>
              <img src={`https://exam-server-5c4e.onrender.com${item.image}`} alt="product-image" />
              <div className="allPagesTitel">
                <h2 className="titleH2">{productTitle()}</h2>
              </div>
              <p>{item.price}</p>
              <p>{item.discont_price}</p>
              <p>{item.description}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default ProductCardDetail;
