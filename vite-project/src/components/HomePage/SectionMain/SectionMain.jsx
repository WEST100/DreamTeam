import React, { useContext } from 'react'
import header from "/src/assets/images/home_img/header.jpg";
import "./SectionMain.scss";
import { ThemeContext } from '../../Theme/ThemeContext';

const SectionMain = () => {

 const { theme } = useContext(ThemeContext);

  return (
    <section className={`main-content ${theme ? "main-content-dark" : "main-content-light"}`}>
      <div className="main-content__items">
        <img className="main-content__image" src={header} alt="header_image" />
        <div className="container">
          <div className="main-content__item">
            <h1 className="main__text">
              Amazing Discounts 
              <br />
              on Garden Products!
            </h1>
            <button className="main__button_large">Check out</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionMain
