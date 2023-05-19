import React from 'react';
import { NavLink } from 'react-router-dom';

export const HomeButton = () => {
  return (
    <NavLink to='/' className='btn btn-primary'>
      Back to the Store
    </NavLink>
  );
};
