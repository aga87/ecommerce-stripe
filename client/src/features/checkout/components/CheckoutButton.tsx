import React from 'react';
import { Button } from '../../../components';
import { useAppDispatch } from '../../../redux/typed-hooks';
import { checkout } from '../redux/checkoutThunks';

type CheckoutButtonProps = {
  cartProducts: CartProduct[];
  isLoading: boolean;
};

export const CheckoutButton = ({
  cartProducts,
  isLoading
}: CheckoutButtonProps) => {
  const dispatch = useAppDispatch();

  const handleCheckout = () => {
    const checkoutItems: CheckoutItem[] = cartProducts.map(cartProduct => ({
      id: cartProduct.id,
      quantity: cartProduct.quantity
    }));
    dispatch(checkout(checkoutItems));
  };

  return (
    <Button
      variant='success'
      text={isLoading ? 'Loading...' : 'Purchase items!'}
      handleClick={handleCheckout}
      disabled={isLoading}
    />
  );
};
