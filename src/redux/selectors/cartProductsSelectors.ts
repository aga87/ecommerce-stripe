import type { RootState } from '../store';

export const selectCartProducts = (state: RootState): CartProduct[] =>
  state.cartProductsReducer.cartProducts;

export const selectCartProductsQuantity = (state: RootState): number =>
  state.cartProductsReducer.cartProducts.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

export const selectTotalCostOfCartProducts = (state: RootState): string => {
  const totalCost: number = state.cartProductsReducer.cartProducts.reduce(
    (sum, product) => {
      return sum + product.price * product.quantity;
    },
    0
  );
  return `€${totalCost.toFixed(2)}`;
};
