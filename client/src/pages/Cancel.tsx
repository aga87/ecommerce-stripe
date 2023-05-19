import React from 'react';
import { NavLink } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

export const Cancel = () => {
  return (
    <>
      <h1 className='p-3'>Payment Cancelled</h1>
      <Alert variant='danger'>The checkout process was unsuccessful.</Alert>
      <p>Your payment was not processed, and you were not charged.</p>
      <p>
        Please try again later or contact our support team if the issue
        persists. We apologize for the inconvenience.
      </p>
      <NavLink to='/' className='btn btn-primary'>
        Back to the Store
      </NavLink>
    </>
  );
};
