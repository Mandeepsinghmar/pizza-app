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
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { GoDash } from "react-icons/go";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);
  console.log(product);
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

  return (
    <ProductContainer>
      <ProductWrapper>
        <ProductCard key={product.id}>
          <ProductImg src={product.img} alt={product.alt} />
          <ProductInfo>
            <ProductTitle>{product.name}</ProductTitle>

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
                    fontSize: "0.9rem",
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
                justifyContent: "space-evenly",

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
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { product, quantity },
                  })
                }
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
      <div style={{ borderTop: "1px solid #e31837" }}>
        <GoHomeButton onClick={handleClick}>Go Home</GoHomeButton>
      </div>
    </ProductContainer>
  );
};

export default ProductDetails;
