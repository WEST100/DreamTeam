import React, { useEffect } from "react";
import "./SectionSale.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../../store/asyncActions/product";
import ProductCard from "../../Product/ProductCard";

const SectionSale = () => {
  let dispatch = useDispatch();

  let { products, isFetching } = useSelector((state) => state.products);

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
    <section className="sale container">
      <div className="categories__title">
        <h2>Sale</h2>
        <hr />
        <button className="categories__button">All sales</button>
      </div>
      <div className="sale__block">{isFetching ? <p>Please, wait...</p> : randomProducts && randomProducts.map((item) => <ProductCard key={item.id} product={item} />)}</div>
    </section>
  );
};

export default SectionSale;
