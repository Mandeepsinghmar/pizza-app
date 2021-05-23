import React from "react";
import { useSelector } from "react-redux";
import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  AllProductTitle,
  AllProductPrice,
  AllProductDiscountPrice,
} from "./ProductsElements";
import currencyFormat from "currency-formatter";
import { Link } from "react-router-dom";

export const Products = () => {
  const { products } = useSelector((state) => state.ProductsReducer);

  return (
    <ProductsContainer>
      <ProductsHeading>Best fast food in the world</ProductsHeading>
      <ProductsWrapper>
        {products
          .sort(() => 0.5 - Math.random())
          .slice(0, 28)
          .map((product) => {
            return (
              <Link
                to={`/product-details/${product.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <ProductCard key={product.id}>
                  <ProductImg src={product.img} alt={product.alt} />
                  <ProductInfo>
                    <AllProductTitle>{product.name}</AllProductTitle>
                    <div
                      style={{
                        display: "flex",
                        // gap: "10px",
                        width: "200px",
                        justifyContent: "space-between",
                        alignContent: "center",
                      }}
                    >
                      <AllProductPrice>
                        <span style={{ textDecoration: "line-through" }}>
                          {" "}
                          {currencyFormat.format(product.price, {
                            code: "USD",
                          })}
                        </span>

                        <span
                          style={{
                            marginLeft: "6px",
                            fontSize: "0.9rem",
                            fontWeight: "300",
                            color: "silver",
                          }}
                        >
                          ({product.discount}%)
                        </span>
                      </AllProductPrice>
                      <AllProductDiscountPrice>
                        {currencyFormat.format(
                          product.discountPrice.toFixed(2),
                          {
                            code: "USD",
                          }
                        )}
                      </AllProductDiscountPrice>
                    </div>
                  </ProductInfo>
                </ProductCard>
              </Link>
            );
          })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};
export default Products;