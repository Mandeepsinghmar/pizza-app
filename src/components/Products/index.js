import React from "react";

import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductDiscountPrice,
} from "./ProductsElements";
import currencyFormat from "currency-formatter";
import { Link } from "react-router-dom";
import {
  Quantity,
  QuantityContainer,
} from "../ProductDetails/ProductDetailsElements";

export const Products = ({ data, heading }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((product) => {
          return (
            <ProductCard key={product.id}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <div
                  style={{
                    display: "flex",
                    // gap: "10px",
                    width: "200px",
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
                >
                  <ProductPrice>
                    <span style={{ textDecoration: "line-through" }}>
                      {" "}
                      {currencyFormat.format(product.price, {
                        code: "USD",
                      })}
                    </span>

                    <span
                      style={{
                        marginLeft: "6px",
                        fontSize: "0.8rem",
                        fontWeight: "300",
                        color: "silver",
                      }}
                    >
                      ({product.discount}%)
                    </span>
                  </ProductPrice>
                  <ProductDiscountPrice>
                    {currencyFormat.format(product.discountPrice.toFixed(2), {
                      code: "USD",
                    })}
                  </ProductDiscountPrice>
                </div>
                <QuantityContainer>
                  <Quantity>-</Quantity>
                  <Quantity>1</Quantity>
                  <Quantity>+</Quantity>
                </QuantityContainer>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};
export default Products;
