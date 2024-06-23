import React from "react";
import Header from "../../components/HomePage/Header/Header";
import SectionMain from "../../components/HomePage/SectionMain/SectionMain";
import SectionCategories from "../../components/HomePage/SectionCategories/SectionCategories";
import SectionDiscount from "../../components/HomePage/SectionDiscount/SectionDiscount";
import SectionSale from "../../components/HomePage/SectionSale/SectionSale";
import Footer from "../../components/HomePage/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <SectionMain />
      <SectionCategories />
      <SectionDiscount />
      <SectionSale />
      <Footer />
    </>
  );
};

export default Home;
