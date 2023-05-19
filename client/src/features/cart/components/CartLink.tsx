import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../redux/typed-hooks';
import { selectCartProductsQuantity } from '../redux/cartProductsSelectors';

export const CartLink = () => {
  const cartProductsQuantity = useAppSelector(selectCartProductsQuantity);

  return (
    <NavLink to='/cart' className='btn btn-primary'>
      Cart {cartProductsQuantity} Items
    </NavLink>
  );
};
