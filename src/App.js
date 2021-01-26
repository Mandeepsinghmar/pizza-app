import react from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { productData, productDataTwo, productDataThree } from './components/Products/data';
import { FeaturePizza } from './components/FeautrePizza';
import { Footer } from './components/Footer';
import { FeatureSweet } from './components/FeatureSweet';


function App() {
  return (
    <Router>
      <GlobalStyle />
    <Hero />
    <Products heading='Choose your favourite' data={productData}/>
    <FeaturePizza />
    <Products heading='Sweet Treates for You' data={productDataTwo}/>
    <FeatureSweet />
    <Products heading='Little Sweet Taste' data={productDataThree}/>
    <Footer />
    </Router>
  );
}

export default App;
