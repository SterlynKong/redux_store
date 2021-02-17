import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";

// declare initialState for imported actions
const initialState = {
  products: [],
  categories: [],
  currentCategory: [],
  cart: [],
  cartOpen: false,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    // if the called action is UPDATE_PRODUCTS then return a new state containing array of updated PRODUCTS
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    // if the called action is UPDATE_CATEGORIES then return a new state containing array of updated CATEGORIES
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    // if the called action is UPDATE_CURRENT_CATEGORY then return a new state with updated value for CURRENT_CATEGORY
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // if the called action is ADD_TO_CART then return a new state for cart containing additional item/product list
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    // if the called action is ADD_MULTIPLE_TO_CART then return a new state for cart containing additional items/products
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    // if the called action is UPDATE_CART_QUANTITY then return a new state for cart not concontaining updated items/product numbers/amounts
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    // if the called action is REMOVE_FROM_CART then return a new state for cart that does not containin removed items/products
    case REMOVE_FROM_CART:
      // set newState = to state without products where id matches passed in product id
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    // if none of the listed actions are called then state does not change
    default:
      return state;
  }
};

export default reducers;
