import React, { useContext } from "react";
import "./Footer.scss";
import { ThemeContext } from "../../Theme/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme ? "footer-dark" : "footer-light"}`}>
      <div className="container">
        <div className="pageSectionTitle">
          <h2>Contact</h2>
        </div>
        <div className="footer__items">
          <div className="footer__item">
            <p className="footer__item_descr">Phone</p>
            <p className="footer__item_info">+49 999 999 99 99</p>
          </div>
          <div className="footer__item">
            <p className="footer__item_descr">Socials</p>
            <a href="#">
              <svg className="footer__item_image" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5 0H9.5C4.27546 0 0 4.27361 0 9.5V28.5C0 33.7245 4.27546 38 9.5 38H28.5C33.7245 38 38 33.7245 38 28.5V9.5C38 4.27361 33.7245 0 28.5 0ZM19 26.9164C14.6271 26.9164 11.0832 23.3709 11.0832 19C11.0832 14.6271 14.6271 11.0832 19 11.0832C23.3709 11.0832 26.9168 14.6271 26.9168 19C26.9168 23.3709 23.3709 26.9164 19 26.9164ZM29.2918 11.0832C27.9789 11.0832 26.9168 10.0196 26.9168 8.70818C26.9168 7.39673 27.9789 6.33318 29.2918 6.33318C30.6047 6.33318 31.6668 7.39673 31.6668 8.70818C31.6668 10.0196 30.6047 11.0832 29.2918 11.0832Z"/>
              </svg>
            </a>
            <a href="#">
              <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.959 0C9.48239 0 0.958984 8.52279 0.958984 19C0.958984 22.6862 2.01598 26.24 4.02236 29.3263L1.06165 36.2348C0.857552 36.7098 0.963932 37.2628 1.33008 37.6289C1.57253 37.8714 1.89661 38 2.22565 38C2.39388 38 2.56396 37.9666 2.72477 37.8973L9.6333 34.936C12.7189 36.9436 16.2728 38 19.959 38C30.4362 38 38.959 29.4772 38.959 19C38.959 8.52279 30.4362 0 19.959 0ZM29.7113 25.8009C29.7113 25.8009 28.1317 27.8271 26.99 28.3008C24.088 29.502 19.9911 28.3008 15.324 23.635C10.6581 18.9678 9.45641 14.871 10.6581 11.969C11.1319 10.826 13.1581 9.24766 13.1581 9.24766C13.7073 8.81966 14.5608 8.87285 15.0531 9.36517L17.3452 11.6573C17.8376 12.1496 17.8376 12.9561 17.3452 13.4484L15.9066 14.8858C15.9066 14.8858 15.324 16.6349 18.8234 20.1355C22.3229 23.635 24.0732 23.0523 24.0732 23.0523L25.5105 21.6137C26.0029 21.1214 26.8094 21.1214 27.3017 21.6137L29.5938 23.9059C30.0861 24.3982 30.1393 25.2505 29.7113 25.8009Z"/>
              </svg>
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
};

export default Footer;
