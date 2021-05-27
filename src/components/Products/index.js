import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
import {
  Quantity,
  QuantityContainer,
} from "../ProductDetails/ProductDetailsElements";
import { GoDash } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";

export const Products = ({ data, heading }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addToCart = (product) => {
    toast.dark(`${quantity} ${product.name} has been added to your cart`, {
      className: "toast",
    });

    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity },
    });
  };

  return (
    <ProductsContainer>
      <>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
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
                  <Quantity onClick={decQuantity}>
                    <GoDash />
                  </Quantity>
                  <Quantity>{quantity}</Quantity>
                  <Quantity onClick={() => setQuantity(quantity + 1)}>
                    <AiOutlinePlus />
                  </Quantity>
                </QuantityContainer>

                <ProductButton onClick={() => addToCart(product)}>
                  {product.button}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};
export default Products;
