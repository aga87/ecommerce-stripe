import { combineReducers } from '@reduxjs/toolkit';
import cartProductsReducer from './cartProductsSlice';
import checkoutReducer from './checkoutSlice';

export default combineReducers({
  cartProductsReducer,
  checkoutReducer
});
