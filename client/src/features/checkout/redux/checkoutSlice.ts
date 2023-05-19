import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  checkoutLink: null as null | string,
  isLoadingCheckoutLink: false,
  checkoutLinkError: null as null | string[]
};

const checkoutSlice = createSlice({
  name: 'checkoutLink',
  initialState,
  reducers: {
    setCheckoutLink: (state, action: PayloadAction<string | null>) => ({
      ...state,
      checkoutLink: action.payload
    }),
    setCheckoutLinkLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoadingCheckoutLink: action.payload
    }),
    setCheckoutLinkError: (state, action: PayloadAction<string[] | null>) => ({
      ...state,
      checkoutLinkError: action.payload
    })
  }
});

export default checkoutSlice.reducer;

export const { setCheckoutLink, setCheckoutLinkLoading, setCheckoutLinkError } =
  checkoutSlice.actions;
