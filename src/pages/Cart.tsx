import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartProduct } from '../components/CartProduct';

// Mock data
const cartProducts: CartProduct[] = [
  {
    id: '1',
    name: 'Coffee',
    price: 4.99,
    quantity: 3
  },
  {
    id: '2',
    name: 'Milk 1L',
    price: 1.89,
    quantity: 2
  }
];

export const Cart = () => {
  const cartProductsCount = 2;
  return (
    <>
      <h1 className='p-3'>Cart</h1>
      {cartProductsCount > 0 ? (
        <>
          <p>Items in your cart:</p>
          {cartProducts.map(cartProduct => (
            <React.Fragment key={cartProduct.id}>
              <CartProduct cartProduct={cartProduct} />
            </React.Fragment>
          ))}

          <p>
            <b>Total: Total</b>
          </p>

          <span style={{ marginRight: '10px' }}>
            <Button variant='success'>Purchase items!</Button>
          </span>
        </>
      ) : (
        <p>There are no items in your cart!</p>
      )}
      <NavLink to='/' className='btn btn-primary'>
        Back to the Store
      </NavLink>
    </>
  );
};
