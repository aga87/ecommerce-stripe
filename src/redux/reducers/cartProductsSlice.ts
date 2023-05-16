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
    },
    removeOneFromCart: (state, action: PayloadAction<CartProduct['id']>) => {
      const productId = action.payload;
      const updatedCartProducts = state.cartProducts.map(product => {
        if (product.id === productId) {
          // Decrease quantity by 1 if the product exists in the cart
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });

      // Remove the product from the cart if the quantity becomes zero
      const filteredCartProducts = updatedCartProducts.filter(
        product => product.quantity > 0
      );

      return {
        ...state,
        cartProducts: filteredCartProducts
      };
    },
    removeFromCart: (state, action: PayloadAction<CartProduct['id']>) => {
      const filteredCartProducts = state.cartProducts.filter(
        product => product.id !== action.payload
      );

      return {
        ...state,
        cartProducts: filteredCartProducts
      };
    }
  }
});

export default cartProductsSlice.reducer;

export const { addToCart, removeOneFromCart, removeFromCart } =
  cartProductsSlice.actions;
