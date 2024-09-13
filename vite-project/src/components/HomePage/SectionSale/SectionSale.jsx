import React, { useContext, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Product/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Theme/ThemeContext";
import "./SectionSale.scss";
import Skeleton from "../../Skeleton/Skeleton";

const SectionSale = () => {
  const { theme } = useContext(ThemeContext);

  let { products, isLoading } = useSelector((state) => state.products);

  // useMemo использую для кеширования отфильтрованных и случайных продуктов, чтобы они генерировались только один раз при монтировании компонента и не изменялись при перерендере. Иначе при клике на сердечко или сумку происходит перерендеривание компонента
  const filteredProducts = useMemo(() => {
    return products.filter((item) => item.discont_price);
  }, [products]);

  // shuffle array with a method sort
  const randomProducts = useMemo(() => {
    return filteredProducts.sort(() => Math.random() - 0.5).slice(0, 4);
  }, [filteredProducts]);

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
        {/* <div className="productListContainer">{isLoading ? <div className="loader"></div> : randomProducts && randomProducts.map((item) => <ProductCard key={item.id} product={item} />)}</div> */}

        <div className={isLoading ? "skeletonListContainer" : "productListContainer"}>{isLoading ? <Skeleton type={"product"} count={4}/> : randomProducts && randomProducts.map((item) => <ProductCard key={item.id} product={item} />)}</div>
      </div>
    </section>
  );
};

export default SectionSale;
