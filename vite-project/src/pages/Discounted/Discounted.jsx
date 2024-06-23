import React, { useEffect } from "react";
import "./Discounted.scss";
import Footer from "../../components/HomePage/Footer/Footer";
import Header from "../../components/HomePage/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../store/asyncActions/product";

const Discounted = () => {
  const dispatch = useDispatch();

  const { products, isFetching } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);

  const findDiscountedItems = products.filter((item) => {
    if (item.discont_price != null) {
      console.log(item);
      return item;
    }
  });

  console.log(findDiscountedItems);

  return (
    <>
      <Header />
      <div className="productListContainer">
        {isFetching ? (
          <p>Please, wait...</p>
        ) : (
          findDiscountedItems &&
          findDiscountedItems.map((prod) => (
            <div key={prod.id}>
              <p>{prod.title}</p>
              <p>{prod.price}</p>
              <p>{prod.discont_price}</p>
              <p>{prod.description}</p>
              <img src={`/src/assets/images${prod.image}`} alt="Discounted Products" />
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Discounted;
