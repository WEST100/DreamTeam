import React from 'react'
import "./ProductCardDetail.scss"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsCardDetailAction } from '../../../store/asyncActions/product';

const ProductCardDetail = () => {

  const { productId } = useParams();

  const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);

    useEffect(() => {
      dispatch(getProductsCardDetailAction(productId));
    }, [productId]);
  
  return (
    <div className="detailedProductPage container">
      <div className="categories__navigation">
        <button className="categories__button">Main page</button>
        <span>—</span>
        <button className="categories__button">Categories</button>
        <span>—</span>
        <button className="categories__button">Tools and equipment</button>
      </div>
      <div className="categories__title">
        <h2>{products.map((prod) => prod.title)}</h2>
      </div>
      <section className="productListContainer">{isFetching ? <p>Please, wait...</p> : products && products.map((item) => <div>{item.image}</div>)}</section>
    </div>
  );
}

export default ProductCardDetail
