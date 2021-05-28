import React from "react";
import { AllProducts } from "./index";
import { useSelector } from "react-redux";
const SuggestedProducts = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  return (
    <AllProducts
      style={{ borderBottom: "1px solid #e31837 !important" }}
      heading="You may also like"
      data={products.sort(() => 0.5 - Math.random()).slice(0, 6)}
    />
  );
};

export default SuggestedProducts;
