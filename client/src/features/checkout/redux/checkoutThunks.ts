import { AppThunk } from '../../../redux/store';
import { CheckoutApiService } from '../services/CheckoutApiService';
import {
  setCheckoutLink,
  setCheckoutLinkLoading,
  setCheckoutLinkError
} from './checkoutSlice';

export const checkout =
  (checkoutItems: CheckoutItem[]): AppThunk =>
  async dispatch => {
    dispatch(setCheckoutLinkLoading(true));
    const { url, error } = await CheckoutApiService.getCheckoutURL(
      checkoutItems
    );
    if (url) {
      dispatch(setCheckoutLink(url));
    } else if (error) {
      dispatch(setCheckoutLinkError(error));
    }
    dispatch(setCheckoutLinkLoading(false));
  };
