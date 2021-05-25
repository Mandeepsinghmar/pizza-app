const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;

      const checkProductInCart = state.products.find(
        (cartProduct) => cartProduct.id === product.id
      );
      if (checkProductInCart) {
        return state;
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
    default:
      return state;
  }
};
export default CartReducer;
