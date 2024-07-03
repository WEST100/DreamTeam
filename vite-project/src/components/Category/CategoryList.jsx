import React, { useContext, useEffect } from "react";
import "./CategoryList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../store/asyncActions/categorie";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeContext";

const CategoryList = () => {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const { categories, isLoading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

  return (
    <>
      <section className={`categories ${theme ? "categories-dark" : "categories-light"}`}>
        <div className="container">
          <div className="breadcrumbs__navigation">
            <button className="breadcrumbs__button">
              <Link to={"/"}>Main page</Link>
            </button>
            <span>—</span>
            <button className="breadcrumbs__button">Categories</button>
          </div>
          <div className="allPagesTitle">
            <h2>Categories</h2>
          </div>
          <div className="categories__listContainer">{isLoading ? <div className="loader"></div> : categories && categories.map((cat) => <CategoryCard key={cat.id} category={cat} />)}</div>
        </div>
      </section>
    </>
  );
};

export default CategoryList;
