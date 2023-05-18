import { AppThunk } from '../store';
import { CheckoutApiService } from '../../services/CheckoutApiService';
import {
  setCheckoutLink,
  setCheckoutLinkLoading,
  setCheckoutLinkError
} from '../reducers/checkoutSlice';

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
