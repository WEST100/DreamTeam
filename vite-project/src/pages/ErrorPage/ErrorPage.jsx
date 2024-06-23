import React from 'react'
import img1 from "/src/assets/images/error_img/left_num.png";
import img2 from "/src/assets/images/error_img/cactus.png";
import img3 from "/src/assets/images/error_img/right_num.png";

const ErrorPage = () => {
  return (
    <>
      <div className="not-found__error">
        <div className="error">
            <div className="error__code">
                <div className="error__code__number">
                    <img src={img1} alt="4"/>
                </div>
                <div className="error__code__image">
                    <img src={img2} alt="Cactus"/>
                </div>
                <div className="error__code__number">
                    <img src={img3} alt="4"/>
                </div>
            </div>
            <div className="error__message">
                <h1>Page Not Found</h1>
                <span>We're sorry, the page you requested could not be found.</span>
                <p> Please go back to the homepage.</p> 
                <a href="/" className="error__message__button">Go Home</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
