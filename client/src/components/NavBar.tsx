import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../redux/typed-hooks';
import { selectCartProductsQuantity } from '../redux/selectors/cartProductsSelectors';

export const NavBar = () => {
  const cartProductsQuantity = useAppSelector(selectCartProductsQuantity);

  return (
    <Navbar expand='sm'>
      <Navbar.Brand href='/'>E-commerce Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <NavLink to='/cart' className='btn btn-primary'>
          Cart {cartProductsQuantity} Items
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};
