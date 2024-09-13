import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../../store/asyncActions/categorie";
import CategoryCard from "../../Category/CategoryCard";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Theme/ThemeContext";
import "./SectionCategories.scss"
import Skeleton from "../../Skeleton/Skeleton";

const SectionCategories = () => {
  const dispatch = useDispatch();

  const { categories, isLoading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

  let filteredСategories = categories.slice(0, 4);

  const { theme } = useContext(ThemeContext);

  return (
    <section className={`categories ${theme ? "categories-dark" : "categories-light"}`}>
      <div className="container">
        <div className="pageSectionTitle">
          <h2>Categories</h2>
          <hr />
          <button className="breadcrumbs__button">
            <Link to={"/categories"}>All categories</Link>
          </button>
        </div>
        <div className="categories__listContainer">{isLoading ? <div className="loader"></div> : filteredСategories && filteredСategories.map((item) => <CategoryCard key={item.id} category={item} />)}</div>

        {/* <div className={isLoading ? "skeletonListContainer" : "categories__listContainer"}>{isLoading ? <Skeleton type={"product"} count={4}/> : filteredСategories && filteredСategories.map((item) => <CategoryCard key={item.id} category={item} />)}</div> */}
      </div>
    </section>
  );
};

export default SectionCategories;
