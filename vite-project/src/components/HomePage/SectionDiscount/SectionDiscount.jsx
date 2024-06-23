import React from 'react'
import "./SectionDiscount.scss";
import imageForm from "/src/assets/images/imageForm.jpeg";

const SectionDiscount = () => {
  return (
    <section className="discount container">
      <div className="discount__form">
        <h3>5% off on the first order</h3>
        <div className="discount__content">
          <div className="discount__image">
            <img src={imageForm} alt="Hands holding garden tools" />
          </div>
          <div className="discount__form__container">
            <form>
              <input type="text" name="name" placeholder="Name" required />
              <input type="tel" name="phone" placeholder="Phone number" required />
              <input type="email" name="email" placeholder="Email" required />
              <button type="submit">Get a discount</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionDiscount
