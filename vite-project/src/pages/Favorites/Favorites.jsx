import React, { useContext } from "react";
import { ThemeContext } from "../../components/Theme/ThemeContext";
import { Link } from "react-router-dom";
import "./Favorites.scss";
import { useSelector } from "react-redux";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import FilterForFavorites from "../../components/Filter/FilterForFavorites/FilterForFavorites";

const Favorites = () => {
  const { theme } = useContext(ThemeContext);

  const { favoritesProducts, isLoading, filteredFavoritesProducts } = useSelector((state) => state.products);

  const data = filteredFavoritesProducts.length > 0 ? filteredFavoritesProducts : favoritesProducts;

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
          <FilterForFavorites />
          <div className="productListContainer">{isLoading ? <div className="loader"></div> : data && data.map((prod) => <ProductCard key={prod.id} product={prod} />)}</div>
        </div>
      </section>
    </>
  );
};

export default Favorites;
