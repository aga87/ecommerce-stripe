import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar expand='sm'>
      <Navbar.Brand href='/'>E-commerce Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <NavLink to='/cart' className='btn btn-primary'>
          Cart 0 Items
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};
