import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";

import { Footer } from "./components/Footer";
import store from "./store";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails/index";
import ProductsCart from "./components/ProductsCart";
import MixedProducts from "./components/AllProducts/MixedProducts";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products">
            <MixedProducts />
          </Route>
          <Route path="/cart">
            <ProductsCart />
          </Route>
          <Route path="/product-details/:id">
            <ProductDetails />
          </Route>
        </Switch>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
