import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./DiscountedItems.scss";
import { getAllProductAction } from '../../store/asyncActions/product';
import ProductCard from '../Product/ProductCard';

const DiscountedItems = () => {

  const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  const findDiscountedItems = products.filter((item) => {
    if (item.discont_price != null) {
      console.log(item);
      return item;
    }
  });

  console.log(findDiscountedItems);

  return (
    <>
      <div className="productListContainer">{isFetching ? <p>Please, wait...</p> : findDiscountedItems && findDiscountedItems.map((prod) => <ProductCard key={prod.id} product={prod} />)}</div>
    </>
  );
}

export default DiscountedItems
