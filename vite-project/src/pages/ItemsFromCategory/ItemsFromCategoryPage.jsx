import React, { useEffect } from "react";
import ItemsFromCategory from "../../components/ItemsFromCategory/ItemsFromCategory";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../store/asyncActions/product";

const ItemsFromCategoryPage = () => {


   const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);

   useEffect(() => {
     dispatch(getAllProductAction());
   }, []);

  return (
    <>
      <div className="productListContainer">{isFetching ? <p>Please, wait...</p> : products && products.map((prod) => <ItemsFromCategory key={prod.id} product={prod} />)}</div>
    </>
  );
};

export default ItemsFromCategoryPage;
