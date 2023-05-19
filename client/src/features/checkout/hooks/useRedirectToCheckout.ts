import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/typed-hooks';
import {
  selectCheckoutLink,
  selectIsLoadingCheckoutLink,
  selectCheckoutLinkError
} from '../redux/checkoutSelectors';
import { setCheckoutLink } from '../redux/checkoutSlice';

export const useRedirectToCheckout = () => {
  const isLoading = useAppSelector(selectIsLoadingCheckoutLink);
  const checkoutLink = useAppSelector(selectCheckoutLink);
  const error = useAppSelector(selectCheckoutLinkError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (checkoutLink) {
      window.location.assign(checkoutLink);
      dispatch(setCheckoutLink(null));
    }
  }, [dispatch, checkoutLink]);

  return { isLoading, error };
};
