import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../../store/asyncActions/product";
import ProductCard from "../../Product/ProductCard";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Theme/ThemeContext";
import "./SectionSale.scss";

const SectionSale = () => {
  let dispatch = useDispatch();

   const { theme } = useContext(ThemeContext);

  let { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  let filteredProducts = products.filter((item) => item.discont_price);

  let randomProducts = filteredProducts.sort(() => Math.random() - 0.5).slice(0, 4);

  // --------------------- 2nd variant to find randomProducts with a shuffle func ------------------

  // function shuffle(array) {
  //   let currentIndex = array.length;
  //   // While there remain elements to shuffle...
  //   while (currentIndex != 0) {
  //     // Pick a remaining element...
  //     let randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  //   }
  //   return array;
  // }

  // let randomProducts = shuffle(filteredProducts).slice(0, 4);
  // console.log(randomProducts);

  // ------------------------------- end ------------------------------

  return (
    <section className={`sale ${theme ? "sale-dark" : "sale-light"}`}>
      <div className="container">
        <div className="pageSectionTitle">
          <h2>Sale</h2>
          <hr />
          <button className="breadcrumbs__button">
            <Link to={"/discounted"}>All sales</Link>
          </button>
        </div>
        <div className="productListContainer">{isLoading ? <div className="loader"></div> : randomProducts && randomProducts.map((item) => <ProductCard key={item.id} product={item} />)}</div>
      </div>
    </section>
  );
};

export default SectionSale;
