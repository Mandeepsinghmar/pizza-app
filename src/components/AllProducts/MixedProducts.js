import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AllProducts } from "./index";
import Pagination from "./Pagination";
const MixedProducts = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const shuffledProducts = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 100);

  //get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = shuffledProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <AllProducts
        heading="Best fast food in the world"
        data={currentProducts}
      />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MixedProducts;
