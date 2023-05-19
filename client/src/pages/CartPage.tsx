import React from 'react';
import { useAppSelector } from '../redux/typed-hooks';
import { PageTitle } from '../components';
import { Cart, selectCartProducts } from '../features/cart';
import { CheckoutButton, useRedirectToCheckout } from '../features/checkout';

export const CartPage = () => {
  const cartProducts = useAppSelector(selectCartProducts);
  const { isLoading, error } = useRedirectToCheckout();

  return (
    <>
      <PageTitle text='Cart' />
      <Cart
        checkoutButton={
          <CheckoutButton cartProducts={cartProducts} isLoading={isLoading} />
        }
        checkoutError={error}
      />
    </>
  );
};
