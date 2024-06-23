import React from 'react'
import "./Footer.scss";
import insta from "/src/assets/images/home_img/insta.svg";
import whatsapp from "/src/assets/images/home_img/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer__title">Contact</h2>
        <div className="footer__items">
          <div className="footer__item">
            <p className="footer__item_descr">Phone</p>
            <p className="footer__item_info">+49 999 999 99 99</p>
          </div>
          <div className="footer__item">
            <p className="footer__item_descr">Socials</p>
            <a href="#">
              <img className="footer__item_image" src={insta} alt="instagram" />
            </a>
            <a href="#">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
          <div className="footer__item">
            <p className="footer__item_descr">Address</p>
            <p className="footer__item_info">Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
          </div>
          <div className="footer__item">
            <p className="footer__item_descr">Working Hours</p>
            <p className="footer__item_info">24 hours a day</p>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4855.896610618105!2d13.377704099999999!3d52.516274599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2z0JHRgNCw0L3QtNC10L3QsdGD0YDQs9GB0LrQuNC1INCy0L7RgNC-0YLQsA!5e0!3m2!1sru!2sde!4v1718793769656!5m2!1sru!2sde" width="1360" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </footer>
  );
}

export default Footer
