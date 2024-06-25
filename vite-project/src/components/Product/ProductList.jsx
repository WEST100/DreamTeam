import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { getAllProductAction } from '../../store/asyncActions/product';

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);

  useEffect(() => {
   dispatch(getAllProductAction())
  }, []);

  return (
    <>
      <div className="productListContainer">{isFetching ? <p>Please, wait...</p> : products && products.map((prod) => <ProductCard key={prod.id} product={prod} />)}</div>
    </>
  );
}

export default ProductList
