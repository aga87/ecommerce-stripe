import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

type NavBarProps = {
  children: React.ReactNode;
};

export const NavBar = ({ children }: NavBarProps) => {
  return (
    <Navbar expand='sm'>
      <Navbar.Brand href='/'>E-commerce Store</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        {children}
      </Navbar.Collapse>
    </Navbar>
  );
};
