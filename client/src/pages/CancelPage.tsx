import React from 'react';
import { Error, HomeButton, PageTitle } from '../components';

export const CancelPage = () => {
  return (
    <>
      <PageTitle text='Payment Cancelled' />
      <Error text='The checkout process was unsuccessful.' />
      <p>Your payment was not processed, and you were not charged.</p>
      <p>
        Please try again later or contact our support team if the issue
        persists. We apologize for the inconvenience.
      </p>
      <HomeButton />
    </>
  );
};
