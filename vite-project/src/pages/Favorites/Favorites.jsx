import React, { useContext, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import { ThemeContext } from "../../components/Theme/ThemeContext";
import { Link } from "react-router-dom";
import "./Favorites.scss";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/Product/ProductCard";
import { getAllProductAction } from "../../store/asyncActions/product";

const Favorites = () => {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const { favoritesProducts, isLoading, filteredProducts, products } = useSelector((state) => state.products);
  console.log(favoritesProducts);
  console.log(products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  const data = filteredProducts.length > 0 ? filteredProducts : favoritesProducts;
  console.log(data);


 /// ----------- ?????????
  const findFavoritesItems = data.filter((item) => {
    return filteredProducts.some((item2) => item2.id === item.id)
  });
  console.log(findFavoritesItems)
/// --------------------

   // ------------------сравнение массивов работает но с ошибками не фильтрует от minPrice до bigPrice и наоборот----------

// const leastArr = filteredProducts.length < favoritesProducts.length ? filteredProducts : favoritesProducts;
// const biggestArr = filteredProducts.length >= favoritesProducts.length ? filteredProducts : favoritesProducts;
// console.log(leastArr);
// console.log(biggestArr);

// const resultArray = leastArr.filter((item) => {
//   return biggestArr.some((item2) => item2.id === item.id)
// });

// console.log(resultArray);
 // ---------------------------------------------------

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
          <Filter />
          <div className="productListContainer">{isLoading ? <div className="loader"></div> : favoritesProducts && favoritesProducts.map((prod) => <ProductCard key={prod.id} product={prod} />)}</div>
        </div>
      </section>
    </>
  );
};

export default Favorites;
