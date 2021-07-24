import React, { useState } from "react";
import "../index.css";
import {
  Quantity,
  QuantityContainer,
} from "../ProductDetails/ProductDetailsElements";
import { GoDash } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { ProductButton } from "./ProductsElements";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const addToCart = () => {
    toast.dark(`${quantity} ${product.name} has been added to your cart`, {
      className: "toast",
    });

    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity },
    });
  };
  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
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
      <QuantityContainer>
        <Quantity onClick={decQuantity}>
          <GoDash />
        </Quantity>
        <Quantity>{quantity}</Quantity>
        <Quantity onClick={() => setQuantity(quantity + 1)}>
          <AiOutlinePlus />
        </Quantity>
      </QuantityContainer>
      <ProductButton onClick={() => addToCart()}>
        {product.button}
      </ProductButton>
    </>
  );
};

export default AddToCart;
