import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesProductsAction } from "../../store/asyncActions/product";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import { getAllCategoriesAction } from "../../store/asyncActions/categorie";
import Filter from "../../components/Filter/Filter";

const ItemsFromCategoryPage = () => {
  const { categoryId } = useParams();

  const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesProductsAction(categoryId));
  }, [categoryId]);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

  return (
    <div className="itemsFromCategoryPage container">
      <div className="categories__navigation">
        <button className="categories__button">Main page</button>
        <span>—</span>
        <button className="categories__button">Categories</button>
        <span>—</span>
        <button className="categories__button">Tools and equipment</button>
      </div>
      <div className="categories__title">
        <h2>{categories.map((cat) => cat.title)}</h2>
      </div>
      <Filter />
      <section className="productListContainer">
        {isFetching ? (
          <p>Please, wait...</p>
        ) : (
          products &&
          products.map((item) => <ProductCard key={item.id} product={item} />)
        )}
      </section>
    </div>
  );
};

export default ItemsFromCategoryPage;
