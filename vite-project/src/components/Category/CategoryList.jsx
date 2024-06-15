import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../store/asyncActions/categorie";


const CategoryList = () => {
  const dispatch = useDispatch();

  const { categories, isFetching } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

  return (
    <div className="categoriesListContainer">
      {isFetching ? (
        <p>Please, wait...</p>
      ) : (
        categories &&
        categories.map((cat) => (
          <div className="categoriesContainer">
            <img className="categoriesImg" src="./assets/images/category_img/1.jpeg" alt="categorie img" />
            <h2>{cat.title}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
