import React, { useEffect } from "react";
import "./CategoryList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../store/asyncActions/categorie";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const dispatch = useDispatch();

  const { categories, isFetching } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

  return (
    <>
      <div className="categories container">
        <div className="categories__navigation">
          <button className="categories__button">Main page</button>
          <span>—</span>
          <button className="categories__button">Categories</button>
        </div>
        <div className="categories__title">
          <h2>Categories</h2>
        </div>
        <div className="categories__listContainer">{isFetching ? <p>Please, wait...</p> : categories && categories.map((cat) => <CategoryCard key={cat.id} category={cat} />)}</div>
      </div>
    </>
  );
};

export default CategoryList;
