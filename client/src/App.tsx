import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './features/nav';
import { CartLink } from './features/cart';
import { CancelPage, CartPage, StorePage, SuccessPage } from './pages';

export const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <NavBar>
          <CartLink />
        </NavBar>
        <Routes>
          <Route index element={<StorePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='success' element={<SuccessPage />} />
          <Route path='cancel' element={<CancelPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
