const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const CartReducer = (state = initialState, action) => {
  let findProduct;
  let index;

  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;

      const checkProductInCart = state.products.find(
        (cartProduct) => cartProduct.id === product.id
      );
      if (checkProductInCart) {
        const TotalPrice = state.totalPrice + product.discountPrice * quantity;
        const TotalQuantities = state.totalQuantities + quantity;
        product.quantity += quantity;
        return {
          ...state,
          products: [...state.products],
          totalPrice: TotalPrice,
          totalQuantities: TotalQuantities,
        };
      } else {
        const TotalPrice = state.totalPrice + product.discountPrice * quantity;
        const TotalQuantities = state.totalQuantities + quantity;
        product.quantity = quantity;

        return {
          ...state,
          products: [...state.products, product],
          totalPrice: TotalPrice,
          totalQuantities: TotalQuantities,
        };
      }

    case "INC":
      findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      console.log(findProduct, index);
      findProduct.quantity += 1;
      state.products[index] = findProduct;
      return {
        ...state,
        totalPrice: state.totalPrice + findProduct.discountPrice,
        totalQuantities: state.totalQuantities + 1,
      };
    case "DEC":
      findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      console.log(findProduct, index);
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;

        state.products[index] = findProduct;

        return {
          ...state,

          totalPrice: state.totalPrice - findProduct.discountPrice,
          totalQuantities: state.totalQuantities - 1,
        };
      }
      break;

    case "REMOVE":
      findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      const filtered = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: filtered,
        totalPrice:
          state.totalPrice - findProduct.discountPrice * findProduct.quantity,
        totalQuantities: state.totalQuantities - findProduct.quantity,
      };

    case "CHECKOUT":
      return { products: [], totalPrice: 0, totalQuantities: 0 };
    default:
      return state;
  }
};
export default CartReducer;
