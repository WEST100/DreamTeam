import React from "react";
import "./SectionSale.scss";
import bridge from "/src/assets/images/home_img/Bridge.png";
import flowers from "/src/assets/images/home_img/Flowers.png";
import cutters from "/src/assets/images/home_img/Wire_cutters.png";
import castle from "/src/assets/images/home_img/Castle.png";

const SectionSale = () => {
  return (
    <section className="sale container">
      <div className="sale__block">
        <div>
          <h2 className="sale__all">Sale</h2>
        </div>
        <div className="sale_block-butlin">
          <div className="sale_item-line">
            <hr className="sale__line" />
          </div>
          <div className="sale__button-item">
            <button className="all__sales">All sales</button>
          </div>
        </div>
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
        </div>
      </div>
    </section>
  );
};

export default SectionSale;
