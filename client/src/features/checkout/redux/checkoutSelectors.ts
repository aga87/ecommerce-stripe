import { RootState } from '../../../redux/store';

export const selectCheckoutLink = (state: RootState): string | null =>
  state.checkoutReducer.checkoutLink;

export const selectIsLoadingCheckoutLink = (state: RootState): boolean =>
  state.checkoutReducer.isLoadingCheckoutLink;

export const selectCheckoutLinkError = (state: RootState): string[] | null =>
  state.checkoutReducer.checkoutLinkError;
