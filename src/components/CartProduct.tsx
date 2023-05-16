import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '../redux/typed-hooks';
import { removeOneFromCart } from '../redux/reducers/cartProductsSlice';

type CartProductProps = {
  cartProduct: CartProduct;
};

export const CartProduct = ({ cartProduct }: CartProductProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveOneFromCart = () => {
    dispatch(removeOneFromCart(cartProduct.id));
  };

  const { name, price, quantity } = cartProduct;
  return (
    <>
      <h2>{name}</h2>
      <p>{quantity} total</p>
      <p>${(quantity * price).toFixed(2)}</p>
      <Button size='sm' onClick={handleRemoveOneFromCart}>
        Remove
      </Button>
      <hr />
    </>
  );
};
