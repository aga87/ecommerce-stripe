import React from 'react';
import Button from 'react-bootstrap/Button';

type CartProductProps = {
  cartProduct: CartProduct;
};

export const CartProduct = ({ cartProduct }: CartProductProps) => {
  const { name, price, quantity } = cartProduct;
  return (
    <>
      <h2>{name}</h2>
      <p>{quantity} total</p>
      <p>${(quantity * price).toFixed(2)}</p>
      <Button size='sm'>Remove</Button>
      <hr />
    </>
  );
};
