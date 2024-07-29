import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesProductsAction } from "../../store/asyncActions/product";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import { getCategoriesTitleAction } from "../../store/asyncActions/categorie";
import { ThemeContext } from "../../components/Theme/ThemeContext";
import "./ItemsFromCategoryPage.scss";
import FilterForCategories from "../../components/Filter/FilterForCategories/FilterForCategories";

const ItemsFromCategoryPage = () => {
  const dispatch = useDispatch();

  const { categoryId } = useParams();

  const { theme } = useContext(ThemeContext);

  const { isLoading, productsFromCategory, filteredProductsFromCategory } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.categories);

  let data = filteredProductsFromCategory.length > 0 ? filteredProductsFromCategory : productsFromCategory;

  useEffect(() => {
    dispatch(getCategoriesProductsAction(categoryId));
    dispatch(getCategoriesTitleAction(categoryId));
  }, [categoryId]);

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
          <button className="breadcrumbs__button">{category?.title}</button>
        </div>
        <div className="allPagesTitle">
          <h2>{category?.title}</h2>
        </div>
        <FilterForCategories />
        {/* <div className="productListContainer">{isLoading ? <div className="loader"></div> : data && data.map((item) => <ProductCard key={item.id} product={item} />)}</div> */}
        {/* пробую вывести сообщение что продукты не найдены если min больше max */}
        <div className="productListContainer">{isLoading ? <div className="loader"></div> : data && data.length > 0 ? data.map((item) => <ProductCard key={item.id} product={item} />) : <p>No products available</p>}</div>
      </div>
    </section>
  );
};

export default ItemsFromCategoryPage;
