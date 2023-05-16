import type { RootState } from '../store';

export const selectCartProductsQuantity = (state: RootState): number =>
  state.cartProductsReducer.cartProducts.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
