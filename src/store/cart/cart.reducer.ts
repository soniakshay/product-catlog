import CART_ACTIONS from './cart.action-types';
const  _ = require('lodash');
const initialState = {
  openCart: false,
  cartItem:[]
};

export default function CartReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case CART_ACTIONS.OPEN_CART: {
      return {
        ...state,
        openCart:true
      };
    }
    case CART_ACTIONS.CLOSE_CART: {
      return {
        ...state,
        openCart:false
      };
    }
    case CART_ACTIONS.SET_ITEMS: {
      return {
        ...state,
        cartItem:action.payload
      };
    }
    case CART_ACTIONS.ADD_TO_CART: {

      const cartItems = state.cartItem;
      cartItems.push(action.payload);
      localStorage.setItem('cartItem',JSON.stringify(cartItems));
      return {
        ...state,
        cartItem: cartItems
      };
    }
    case CART_ACTIONS.UPDATE_QUANTITY: {

      const itemIndex = _.findIndex(state.cartItem,{id: action.payload.id});
      const cartItems = state.cartItem;
      cartItems[itemIndex].Quantity =  action.payload.Quantity;
      localStorage.setItem('cartItem',JSON.stringify(cartItems));
      return {
        ...state,
        cartItem: cartItems
      };
    }
    case CART_ACTIONS.REMOVE_ITEM: {
      const cartItems = state.cartItem;
      _.remove(cartItems,{id: action.payload.id});
      localStorage.setItem('cartItem',JSON.stringify(cartItems));
      return {
        ...state,
        cartItem: cartItems
      };
    }
    default:
      return state;
  }
}
