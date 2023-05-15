import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <Navbar expand='sm'>
      <Navbar.Brand href='/'>E-commerce Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Button>Cart 0 items</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};
