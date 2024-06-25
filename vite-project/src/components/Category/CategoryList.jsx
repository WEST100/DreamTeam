import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../store/asyncActions/categorie";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import "./CategoryList.scss";

const CategoryList = () => {
  const dispatch = useDispatch();

  const { categories, isFetching } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);

  return (
    <>
      <Header />
      <div className="categories container">
        <div className="categories__navigation">
          <button>Main page</button>
          <span>—</span>
          <button>Categories</button>
        </div>
        <div className="categories__title">
          <h2>Categories</h2>
        </div>
        <div className="categories__ListContainer">
          {isFetching ? (
            <p>Please, wait...</p>
          ) : (
            categories &&
            categories.map((cat) => (
              <div key={cat.id} className="categories__Container">
                <img
                  className="categories__Img"
                  src={`/src/assets/images${cat.image}`}
                  alt="categorie img"
                />
                <p>{cat.title}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryList;
