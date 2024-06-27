import React, { useEffect } from "react";
import "./SectionSale.scss";
import bridge from "/src/assets/images/home_img/Bridge.png";
import flowers from "/src/assets/images/home_img/Flowers.png";
import cutters from "/src/assets/images/home_img/Wire_cutters.png";
import castle from "/src/assets/images/home_img/Castle.png";
import whiteheart from "/src/assets/images/home_img/white_heart.svg";
import cart from "/src/assets/images/home_img/white_cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../../store/asyncActions/product";

const SectionSale = () => {
  let dispatch = useDispatch();

  let { products, isFetching } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  let filteredProducts = products.filter((item) => item.discont_price);

  let randomProducts = filteredProducts.sort(() => Math.random() - 0.5).slice(0, 4);
  console.log(randomProducts);

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
  //     return array;
  //   }
  // }

  // let randomProducts = shuffle(filteredProducts).slice(0, 4);
  // console.log(randomProducts);

  // ------------------------------- end ------------------------------

  return (
    <section className="sale container">
      <div className="sale__block">
        <h2 className="sale__title">Sale</h2>
        <hr className="sale__line" />
        <button className="categories__button">All sales</button>
      </div>
      <div className="sale__main-section">
        <div className="sale__priceBlock">
          <div className="sale__img">
            <img className="sale__img-item" src={bridge} alt="Bridge" />
          </div>
          <div className="sale__description">
            <div className="sale__discount">
              <p>Decorative forged bridge</p>
            </div>
            <div className="sale__prices">
              <p className="sale__realPrice">$500</p>
              <p className="sale__oldPrice">$1000</p>
            </div>
          </div>
          <div className="sale__discountPerc">
            <p>-50%</p>
          </div>
          <div className="sale__icons-item">
            <img className="sale__icons-all" src={whiteheart} alt="Icon Heart" />
            <img className="sale__icons-all" src={cart} alt="Icon Bag" />
          </div>
        </div>
        <div className="sale__priceBlock">
          <div className="sale__img">
            <img className="sale__img-item" src={flowers} alt="flowers" />
          </div>
          <div className="sale__description">
            <div className="sale__discount">
              <p>Aquarium lock</p>
            </div>
            <div className="sale__prices">
              <p className="sale__realPrice">$100</p>
              <p className="sale__oldPrice">$150</p>
            </div>
          </div>
          <div className="sale__discountPerc">
            <p>-34%</p>
          </div>
          <div className="sale__icons-item">
            <img className="sale__icons-all" src={whiteheart} alt="Icon Heart" />
            <img id="sale__icons-bag" className="sale__icons-all" src={cart} alt="Icon Bag" />
          </div>
        </div>
        <div className="sale__priceBlock">
          <div className="sale__img">
            <img className="sale__img-item" src={castle} alt="castle" />
          </div>
          <div className="sale__description">
            <div className="sale__discount">
              <p>Flower basket</p>
            </div>
            <div className="sale__prices">
              <p className="sale__realPrice">$150</p>
              <p className="sale__oldPrice">$200</p>
            </div>
          </div>
          <div className="sale__discountPerc">
            <p>-25%</p>
          </div>
          <div className="sale__icons-item">
            <img className="sale__icons-all" src={whiteheart} alt="Icon Heart" />
            <img className="sale__icons-all" src={cart} alt="Icon Bag" />
          </div>
        </div>
        <div className="sale__priceBlock">
          <div className="sale__img">
            <img className="sale__img-item" src={cutters} alt="Wire cutters" />
          </div>
          <div className="sale__description">
            <div className="sale__discount">
              <p>Secateurs</p>
            </div>
            <div className="sale__prices">
              <p className="sale__realPrice">$199</p>
              <p className="sale__oldPrice">$240</p>
            </div>
          </div>
          <div className="sale__discountPerc">
            <p>-17%</p>
          </div>
          <div className="sale__icons-item">
            <img className="sale__icons-all" src={whiteheart} alt="Icon Heart" />
            <img className="sale__icons-all" src={cart} alt="Icon Bag" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSale;
