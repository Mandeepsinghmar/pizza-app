import { useSelector, useDispatch } from "react-redux";
import {
  Cart,
  CartContainer,
  CartHeading,
  CartHeadingTitle,
  CartRow,
  CartRowContainer,
  CartTitle,
  CartItemsConatiner,
  CartItemsDesc,
  CartProductImgContainer,
  Summary,
  SummaryContainer,
  QuantityContainer,
  Quantity,
  SummaryHeading,
  SummaryDetails,
  SummaryDesc,
  SummaryDetailsContainer,
  CheckoutCart,
  AddProductsButton,
} from "./ProdctsCartElements";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiOutlinePlus } from "react-icons/ai";
import { GoDash } from "react-icons/go";
import { RiChatDeleteFill } from "react-icons/ri";

import currencyFormat from "currency-formatter";
import { Link } from "react-router-dom";
import "../index.css";
const ProductsCart = () => {
  const dispatch = useDispatch();
  const { products, totalPrice, totalQuantities } = useSelector(
    (state) => state.CartReducer
  );

  const user = useSelector((state) => state.UserReducer);

  const Checkout = () => {
    if (user) {
      toast.dark("Thank you! Your order was successfully submitted!", {
        className: "toast",
      });
      dispatch({ type: "CHECKOUT" });
    } else {
      toast.dark("You must be logged in to checkout!", {
        className: "toast",
      });
    }
  };

  return (
    <Cart>
      <>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
      <CartContainer>
        {products.length > 0 ? (
          <>
            <CartTitle>Your Cart:</CartTitle>
            <CartRow>
              <CartRowContainer>
                <CartHeading>
                  <CartHeadingTitle>Picture</CartHeadingTitle>
                  <CartHeadingTitle>Name</CartHeadingTitle>
                  <CartHeadingTitle>Price</CartHeadingTitle>
                  <CartHeadingTitle>Inc/Dec</CartHeadingTitle>
                  <CartHeadingTitle>Total Price</CartHeadingTitle>
                  <CartHeadingTitle>Remove</CartHeadingTitle>
                </CartHeading>
                {products.map((product) => (
                  <CartItemsConatiner style={{ background: "none" }}>
                    <CartItemsDesc>
                      <CartProductImgContainer>
                        <img
                          src={product.img}
                          alt={product.alt}
                          style={{
                            width: "55px",
                            height: "45px",
                            borderRadius: "5px",
                            object: "contain",
                          }}
                        ></img>
                      </CartProductImgContainer>
                    </CartItemsDesc>
                    <CartItemsDesc>{product.name}</CartItemsDesc>

                    <CartItemsDesc>
                      {" "}
                      {currencyFormat.format(product.discountPrice, {
                        code: "USD",
                      })}
                    </CartItemsDesc>
                    <CartItemsDesc>
                      <QuantityContainer>
                        <Quantity
                          onClick={() =>
                            dispatch({ type: "DEC", payload: product.id })
                          }
                        >
                          <GoDash />
                        </Quantity>
                        <Quantity>{product.quantity}</Quantity>
                        <Quantity
                          onClick={() =>
                            dispatch({ type: "INC", payload: product.id })
                          }
                        >
                          <AiOutlinePlus />
                        </Quantity>
                      </QuantityContainer>
                    </CartItemsDesc>
                    <CartItemsDesc>
                      {" "}
                      {currencyFormat.format(
                        product.discountPrice * product.quantity,
                        { code: "USD" }
                      )}
                    </CartItemsDesc>
                    <CartItemsDesc
                      style={{ fontSize: "1.2rem", cursor: "pointer" }}
                    >
                      <RiChatDeleteFill
                        onClick={() => {
                          dispatch({ type: "REMOVE", payload: product.id });
                          localStorage.removeItem("cart");
                        }}
                      />
                    </CartItemsDesc>
                  </CartItemsConatiner>
                ))}
              </CartRowContainer>
              <SummaryContainer>
                <Summary>
                  <SummaryHeading>Summary</SummaryHeading>
                  <SummaryDetailsContainer>
                    {" "}
                    <SummaryDetails>
                      <SummaryDesc>Total items: </SummaryDesc>
                      <SummaryDesc>{totalQuantities}</SummaryDesc>
                    </SummaryDetails>
                    <SummaryDetails>
                      <SummaryDesc>Total Price:</SummaryDesc>
                      <SummaryDesc>
                        {currencyFormat.format(totalPrice, { code: "USD" })}
                      </SummaryDesc>
                    </SummaryDetails>
                    <CheckoutCart onClick={() => Checkout()}>
                      Checkout
                    </CheckoutCart>
                  </SummaryDetailsContainer>
                </Summary>
              </SummaryContainer>
            </CartRow>
          </>
        ) : (
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h3> "Your cart is empty."</h3>

            <Link to="/products">
              <AddProductsButton>Add Products To Cart</AddProductsButton>
            </Link>
          </div>
        )}
      </CartContainer>
    </Cart>
  );
};

export default ProductsCart;
