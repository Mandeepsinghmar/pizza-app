import React, { useEffect, useState } from "react";
import { AllProducts } from "./index";
import { useSelector } from "react-redux";
const SuggestedProducts = ({ productId }) => {
  const { products } = useSelector((state) => state.ProductsReducer);
  const [data, setData] = useState();

  useEffect(() => {
    let productsData = products.sort(() => 0.5 - Math.random()).slice(0, 6);
    setData(productsData);
  }, [productId, products]);

  return (
    <>
      <AllProducts
        style={{ borderBottom: "1px solid #e31837 !important" }}
        heading="You may also like"
        data={data}
      />
    </>
  );
};

export default SuggestedProducts;
