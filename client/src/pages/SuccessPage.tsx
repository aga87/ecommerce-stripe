import React from 'react';
import { HomeButton, PageTitle } from '../components';

export const SuccessPage = () => {
  return (
    <>
      <PageTitle text='Payment Successful' />
      <p>
        Your order has been successfully placed, and it will be arriving soon.
      </p>
      <p>Thank you for shopping with us!</p>
      <HomeButton />
    </>
  );
};
