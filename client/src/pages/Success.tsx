import React from 'react';
import { NavLink } from 'react-router-dom';

export const Success = () => {
  return (
    <>
      <h1 className='p-3'>Payment Successful</h1>
      <p>
        Your order has been successfully placed, and it will be arriving soon.
      </p>
      <p>Thank you for shopping with us!</p>
      <NavLink to='/' className='btn btn-primary'>
        Back to the Store
      </NavLink>
    </>
  );
};
