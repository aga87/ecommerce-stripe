import React from 'react';
import { Button } from '../../../components';
import { useAppDispatch } from '../../../redux/typed-hooks';
import { addToCart } from '../redux/cartProductsSlice';

type AddToCartButtonProps = {
  product: Product;
};
export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return <Button text='Add To Cart' handleClick={handleAddToCart} />;
};
