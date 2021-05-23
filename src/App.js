import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Provider } from "react-redux";
import { Navbar } from "./components/Navbar";
import HomePage from "./components/HomePage";
import { Footer } from "./components/Footer";
import store from "./store";
import Products from "./components/Products/allProducts";
import { productData } from "./components/Products/data";
import ProductDetails from "./components/ProductDetails/index";

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
            <Products heading="Choose your favourites" data={productData} />
          </Route>
          <Route path="/cart">
            <Footer />
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
