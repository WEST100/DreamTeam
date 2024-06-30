import React, { useEffect } from "react";
import "./SectionCategories.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../../store/asyncActions/categorie";
import CategoryCard from "../../Category/CategoryCard";

const SectionCategories = () => {
  const dispatch = useDispatch();

  const { categories, isFetching } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

  let filteredСategories = categories.slice(0, 4);

  return (
    <section className="categories container">
      <div className="categories__block">
        <h2>Categories</h2>
        <hr />
        <button className="categories__button">All categories</button>
      </div>
      <div className="categories__listContainer">{isFetching ? <p>Please, wait...</p> : filteredСategories && filteredСategories.map((item) => <CategoryCard key={item.id} category={item} />)}</div>
    </section>
  );
};

export default SectionCategories;
