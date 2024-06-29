import React, { useEffect } from "react";
import ItemsFromCategory from "../../components/ItemsFromCategory/ItemsFromCategory";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesProductsAction } from "../../store/asyncActions/product";
import { useParams } from "react-router-dom";

const ItemsFromCategoryPage = () => {

 const { categoryId } = useParams();

   const dispatch = useDispatch();

  const { isFetching } = useSelector((state) => state.products);

   useEffect(() => {
     dispatch(getCategoriesProductsAction(categoryId));
   }, [categoryId]);

  return (
    <>
      <div className="productListContainer">{isFetching ? <p>Please, wait...</p> :  <ItemsFromCategory />}</div>
    </>
  );
};

export default ItemsFromCategoryPage;
