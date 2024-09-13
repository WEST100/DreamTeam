import React, { useContext, useEffect } from "react";
import "./CategoryList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../store/asyncActions/categorie";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeContext";
import Skeleton from "../Skeleton/Skeleton";

const CategoryList = () => {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const { categories, isLoading } = useSelector((state) => state.categories);

    // пробую передать число продуктов для скелетона но передается так только 8 а не 35 ????????????????????????????????
    let countOfCategories = setTimeout(() => {
      console.log(categories.length);
      return categories.length
    }, 100);

    // если так то получаю 0 
    let countOfCategories2 = categories.length

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
          {/* <div className="categories__listContainer">{isLoading ? <div className="loader"></div> : categories && categories.map((cat) => <CategoryCard key={cat.id} category={cat} />)}</div> */}

          <div className={isLoading ? "skeletonСategorieslistContainer" : "categories__listContainer"}>{isLoading ? <Skeleton type={"category"} count={5}/> : categories && categories.map((cat) => <CategoryCard key={cat.id} category={cat} />)}</div>
        </div>
      </section>
    </>
  );
};

export default CategoryList;
