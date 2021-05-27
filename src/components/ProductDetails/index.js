import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  ProductCard,
  ProductContainer,
  GoHomeButton,
  ProductWrapper,
  ProductButton,
  QuantityContainer,
  Quantity,
} from "./ProductDetailsElements";
import {
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductDiscountPrice,
} from "../Products/ProductsElements";
import currencyFormat from "currency-formatter";

import "../index.css";
import { AiOutlinePlus } from "react-icons/ai";
import { GoDash } from "react-icons/go";
import SuggestedProducts from "../AllProducts/SuggestedProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);

  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  const handleClick = () => {
    history.push("/");
  };
  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const clickHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity },
    });

    toast.dark(
      `${product.quantity} ${product.name} has been added to your cart`,
      {
        className: "toast",
      }
    );
  };

  return (
    <ProductContainer>
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
      <ProductWrapper style={{ borderBottom: "4px solid silver" }}>
        <ProductCard key={product.id}>
          <ProductImg src={product.img} alt={product.alt} />
          <ProductInfo>
            <ProductTitle>{product.name}</ProductTitle>

            <div
              style={{
                display: "flex",
                // gap: "20px",
                width: "150px",
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
                {currencyFormat.format(product.discountPrice, {
                  code: "USD",
                })}
              </ProductDiscountPrice>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                width: "100%",

                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <QuantityContainer>
                <Quantity onClick={decQuantity}>
                  <GoDash />
                </Quantity>
                <Quantity>{quantity}</Quantity>
                <Quantity onClick={() => setQuantity(quantity + 1)}>
                  <AiOutlinePlus />
                </Quantity>
              </QuantityContainer>

              <ProductButton
                onClick={() => {
                  clickHandler();
                }}
              >
                {product.button}
              </ProductButton>
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "1.4rem",
                justifyContent: "flex-start",
              }}
            >
              Product Desc:
            </div>
            <ProductDesc>{product.desc}</ProductDesc>
          </ProductInfo>
        </ProductCard>
      </ProductWrapper>
      <SuggestedProducts />
      <div>
        <GoHomeButton onClick={handleClick}>Go Home</GoHomeButton>
      </div>
    </ProductContainer>
  );
};

export default ProductDetails;
