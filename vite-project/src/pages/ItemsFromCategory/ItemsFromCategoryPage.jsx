import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesProductsAction } from "../../store/asyncActions/product";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";

const ItemsFromCategoryPage = () => {
  const { categoryId } = useParams();

  const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getCategoriesProductsAction(categoryId));
  }, [categoryId]);

  return (
    <>
      <section className="productListContainer">
        {isFetching ? <p>Please, wait...</p> : products && products.map((item) => <ProductCard key={item.id} product={item} />)}
      </section>
    </>
  );
};

export default ItemsFromCategoryPage;