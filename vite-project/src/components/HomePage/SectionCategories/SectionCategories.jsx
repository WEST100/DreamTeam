import React, { useEffect } from "react";
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
      <div className="homePageSectionTitle">
        <h2>Categories</h2>
        <hr />
        <button className="breadcrumbs__button">All categories</button>
      </div>
      <div className="categories__listContainer">{isFetching ? <p>Please, wait...</p> : filteredСategories && filteredСategories.map((item) => <CategoryCard key={item.id} category={item} />)}</div>
    </section>
  );
};

export default SectionCategories;
