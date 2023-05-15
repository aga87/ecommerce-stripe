import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [] as CartProduct[]
};

const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const isInCart = state.cartProducts.some(
        product => product.id === action.payload.id
      );

      if (!isInCart)
        return {
          ...state,
          cartProducts: [
            ...state.cartProducts,
            { ...action.payload, quantity: 1 }
          ]
        };

      // if in cart
      const updatedCartProducts = state.cartProducts.map(product => {
        if (product.id === action.payload.id)
          return { ...product, quantity: product.quantity + 1 };
        return product;
      });

      return {
        ...state,
        cartProducts: updatedCartProducts
      };
    }
  }
});

export default cartProductsSlice.reducer;

export const { addToCart } = cartProductsSlice.actions;
