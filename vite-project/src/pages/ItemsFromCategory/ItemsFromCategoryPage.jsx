import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesProductsAction } from "../../store/asyncActions/product";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import { getCategoriesTitleAction } from "../../store/asyncActions/categorie";
import Filter from "../../components/Filter/Filter";
import { ThemeContext } from "../../components/Theme/ThemeContext";
import "./ItemsFromCategoryPage.scss";

const ItemsFromCategoryPage = () => {
  const { categoryId } = useParams();

  const { theme } = useContext(ThemeContext);

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
    <section className={`itemsFromCategoryPage ${theme ? "itemsFromCategoryPage-dark" : "itemsFromCategoryPage-light"}`}>
      <div className="container">
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
        <div className="productListContainer">{isLoading ? <div className="loader"></div> : products && products.map((item) => <ProductCard key={item.id} product={item} />)}</div>
      </div>
    </section>
  );
};

export default ItemsFromCategoryPage;
