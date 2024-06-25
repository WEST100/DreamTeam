import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./DiscountedItems.scss";
import { getAllProductAction } from '../../store/asyncActions/product';

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
      <div className="productListContainer">
        {isFetching ? (
          <p>Please, wait...</p>
        ) : (
          findDiscountedItems &&
          findDiscountedItems.map((prod) => (
            <div key={prod.id}>
              <p>{prod.title}</p>
              <p>{prod.price}</p>
              <p>{prod.discont_price}</p>
              <p>{prod.description}</p>
              <img src={`/src/assets/images${prod.image}`} alt="Discounted Products" />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default DiscountedItems
