import React from "react";
import { Hero } from "../Hero";
import { Products } from "../Products";

import { FeaturePizza } from "../FeautrePizza";
import { useSelector } from "react-redux";
import { FeatureSweet } from "../FeatureSweet";

const HomePage = () => {
  const { products } = useSelector((state) => state.ProductsReducer);

  return (
    <div>
      {" "}
      <Hero />
      <Products heading="Choose your favourite" data={products.slice(0, 6)} />
      <FeaturePizza />
      <Products heading="Sweet Treates for You" data={products.slice(8, 13)} />
      <FeatureSweet />
      <Products heading="Best Sweets of day" data={products.slice(16, 21)} />
    </div>
  );
};

export default HomePage;
