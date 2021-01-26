import react from 'react';
import { FeatureContainer, FeatureButton} from './FeatureElements';

export const FeatureSweet = () => {
    return(
    <FeatureContainer>
        <h1>Sweet of the Day</h1>
        <p>Chocolate Cream Cheese Cupcakes</p>
        <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
    )
}