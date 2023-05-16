import type { RootState } from '../store';

export const selectCartProducts = (state: RootState): CartProduct[] =>
  state.cartProductsReducer.cartProducts;

export const selectCartProductsQuantity = (state: RootState): number =>
  state.cartProductsReducer.cartProducts.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
