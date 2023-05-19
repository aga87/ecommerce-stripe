import { combineReducers } from '@reduxjs/toolkit';
import { cartProductsReducer } from '../../features/cart';
import { checkoutReducer } from '../../features/checkout';

export default combineReducers({
  cartProductsReducer,
  checkoutReducer
});
