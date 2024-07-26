import React from "react";
import SectionMain from "../../components/HomePage/SectionMain/SectionMain";
import SectionCategories from "../../components/HomePage/SectionCategories/SectionCategories";
import SectionDiscount from "../../components/HomePage/SectionDiscount/SectionDiscount";
import SectionSale from "../../components/HomePage/SectionSale/SectionSale";

const Home = () => {
  return (
    <>
      <SectionMain />
      <SectionCategories />
      <SectionDiscount />
      <SectionSale />
    </>
  );
};

export default Home;
