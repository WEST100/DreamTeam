import React, { useContext } from "react";
import Filter from "../../components/Filter/Filter";
import { ThemeContext } from "../../components/Theme/ThemeContext";
import { Link } from "react-router-dom";
import "./Favorites.scss"

const Favorites = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section className={`favorites ${theme ? "favorites-dark" : "favorites-light"}`}>
        <div className="container">
          <div className="breadcrumbs__navigation">
            <button className="breadcrumbs__button">
              <Link to={"/"}>Main page</Link>
            </button>
            <span>—</span>
            <button className="breadcrumbs__button">Liked products</button>
          </div>
          <div className="allPagesTitle">
            <h2>Liked products</h2>
          </div>
        </div>
        <Filter />
      </section>
    </>
  );
};

export default Favorites;
