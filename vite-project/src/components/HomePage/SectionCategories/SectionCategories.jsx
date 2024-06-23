import React from 'react'
import "./SectionCategories.scss";
import img1 from "/src/assets/images/category_img/1.jpeg";
import img2 from "/src/assets/images/category_img/2.jpeg";
import img3 from "/src/assets/images/category_img/3.jpeg";
import img4 from "/src/assets/images/category_img/4.jpeg";

const SectionCategories = () => {
  return (
    <section className="categories container">
      <div className="categories__title">
        <h2>Categories</h2>
        <hr />
        <button className="categories__button">All categories</button>
      </div>
      <div className="categories__card">
        <div className="categories__card__images">
          <img src={img1} alt="Fertilizer" />
          <p>Fertilizer</p>
        </div>
        <div className="categories__card__images">
          <img src={img2} alt="Protective products and septic tanks" />
          <p>Protective products and septic tanks</p>
        </div>
        <div className="categories__card__images">
          <img src={img3} alt="Planting material" />
          <p>Planting material</p>
        </div>
        <div className="categories__card__images">
          <img src={img4} alt="Planting material" />
          <p>Planting material</p>
        </div>
      </div>
    </section>
  );
}

export default SectionCategories
