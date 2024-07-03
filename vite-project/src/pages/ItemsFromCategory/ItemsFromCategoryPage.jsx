import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesProductsAction } from "../../store/asyncActions/product";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import { getCategoriesTitleAction } from "../../store/asyncActions/categorie";
import Filter from "../../components/Filter/Filter";

const ItemsFromCategoryPage = () => {
  const { categoryId } = useParams();

  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesProductsAction(categoryId));
  }, [categoryId]);

  useEffect(() => {
    dispatch(getCategoriesTitleAction(categoryId));
  }, [categoryId]);

  console.log(categoryId);

  console.log(categories.title);

  return (
    <div className="itemsFromCategoryPage container">
      <div className="breadcrumbs__navigation">
        <button className="breadcrumbs__button">
          <Link to={"/"}>Main page</Link>
        </button>
        <span>—</span>
        <button className="breadcrumbs__button">
          <Link to={"/categories"}>Categories</Link>
        </button>
        <span>—</span>
        <button className="breadcrumbs__button">{categories.title}</button>
      </div>
      <div className="allPagesTitle">
        <h2>{categories.title}</h2>
      </div>
      <Filter />
      <section className="productListContainer">{isLoading ? <div className="loader"></div> : products && products.map((item) => <ProductCard key={item.id} product={item} />)}</section>
    </div>
  );
};

export default ItemsFromCategoryPage;
