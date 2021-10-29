import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";

const StripeCheckoutButton = ({ price, children }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);

  const onToken = (token) => {
    console.log(token);
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
    <StripeCheckout
      label="Pay Now"
      name="Subway."
      billingAddress
      shippingAddress
      image="https://www.freakyjolly.com/wp-content/uploads/2020/04/fj-logo.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      {children}
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
