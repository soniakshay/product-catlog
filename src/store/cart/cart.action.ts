import CART_ACTIONS from './cart.action-types';

export const openCartMenu = () => ({
  type: CART_ACTIONS.OPEN_CART,
  payload: {},
});

export const closeCartMenu = () => ({
  type: CART_ACTIONS.CLOSE_CART,
  payload: {},
});

export const addToCart = (item: any) => ({
  type: CART_ACTIONS.ADD_TO_CART,
  payload: item,
});


export const increseCartItemQuantity = (item: any) => ({
  type: CART_ACTIONS.UPDATE_QUANTITY,
  payload: item,
});

export const removeItemFromCart = (item: any) => ({
  type: CART_ACTIONS.REMOVE_ITEM,
  payload: item,
});

export const setCartItems = (items: any) => ({
  type: CART_ACTIONS.SET_ITEMS,
  payload: items,
});
