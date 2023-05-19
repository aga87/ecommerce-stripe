import React from 'react';
import { Button, Card, CardText } from '../../../components';
import { useAppDispatch } from '../../../redux/typed-hooks';
import {
  addToCart,
  removeOneFromCart,
  removeFromCart
} from '../redux/cartProductsSlice';

type CartProductProps = {
  cartProduct: CartProduct;
};

export const CartProduct = ({ cartProduct }: CartProductProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const { quantity, ...product } = cartProduct;
    dispatch(addToCart(product));
  };

  const handleRemoveOneFromCart = () => {
    dispatch(removeOneFromCart(cartProduct.id));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartProduct.id));
  };

  const { name, price, quantity } = cartProduct;

  const totalCost = `€${(quantity * price).toFixed(2)}`;

  return (
    <Card title={name}>
      <CardText text={`Total ${totalCost}`} />
      <CardText text='Quantity' />
      <div style={{ marginBottom: '10px' }}>
        <span
          style={{
            display: 'inline-block',
            marginRight: '10px'
          }}
        >
          <Button size='sm' text=' - ' handleClick={handleRemoveOneFromCart} />
        </span>
        {quantity}
        <span
          style={{
            display: 'inline-block',
            marginLeft: '10px'
          }}
        >
          <Button size='sm' text='+' handleClick={handleAddToCart} />
        </span>
      </div>
      <Button
        variant='danger'
        size='sm'
        text='Remove'
        handleClick={handleRemoveFromCart}
      />
    </Card>
  );
};
