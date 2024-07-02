import React, { useEffect } from "react";
import "./ProductCardDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesProductsAction, getProductsCardDetailAction } from "../../../store/asyncActions/product";
import { getAllCategoriesAction } from "../../../store/asyncActions/categorie";

const ProductCardDetail = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsCardDetailAction(productId));
  }, [productId]);

  console.log(products);

  let productTitle = () => {
    let prod = "";
    for (let key in products) {
      prod = products[key].title;
    }
    return prod;
  };

  return (
    <div className="detailedProductPage container">
      <div className="breadcrumbs__navigation">
        <button className="breadcrumbs__button">Main page</button>
        <span>—</span>
        <button className="breadcrumbs__button">Categories</button>
        <span>—</span>
        <button className="breadcrumbs__button">Tools and equipment</button>
        <span>—</span>
        <button className="breadcrumbs__button">{productTitle()}</button>
      </div>
      <div className="detailedProductPage__title">
        {/* <h2>{products.map((prod) => prod.title)}</h2> */}
        <h2>{productTitle()}</h2>
      </div>
      <section className="productListContainer">
        {isFetching ? (
          <p>Please, wait...</p>
        ) : (
          products &&
          products.map((item) => (
            <div key={item.id}>
              <img src={`https://exam-server-5c4e.onrender.com${item.image}`} alt="product-image" />
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
