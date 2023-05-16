import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAppDispatch } from '../redux/typed-hooks';
import {
  addToCart,
  removeOneFromCart
} from '../redux/reducers/cartProductsSlice';

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

  const { name, price, quantity } = cartProduct;

  const totalCost = `€${(quantity * price).toFixed(2)}`;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Total {totalCost}</Card.Text>
        <Card.Text>Quantity</Card.Text>
        <div>
          <Button
            size='sm'
            onClick={handleRemoveOneFromCart}
            style={{ marginRight: '10px' }}
          >
            -
          </Button>
          {quantity}
          <Button
            size='sm'
            onClick={handleAddToCart}
            style={{ marginLeft: '10px' }}
          >
            +
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
