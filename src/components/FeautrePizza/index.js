import { Link } from "react-router-dom";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

export const FeaturePizza = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <Link to="/product-details/28">
        <FeatureButton>Order Now</FeatureButton>
      </Link>
    </FeatureContainer>
  );
};
