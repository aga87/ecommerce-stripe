import React from 'react';
import { PageTitle } from '../components';
import { Products } from '../features/store';

export const StorePage = () => {
  return (
    <>
      <PageTitle text='Welcome to the store!' />
      <Products />
    </>
  );
};
