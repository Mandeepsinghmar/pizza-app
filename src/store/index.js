import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";
import UserReducer from "./reducers/UserReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const Reducers = combineReducers({
  CartReducer,
  ProductsReducer,
  UserReducer,
});

const store = createStore(Reducers, devToolsEnhancer());
export default store;
