import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Cancel, Cart, Store, Success } from './pages';

export const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Store />} />
          <Route path='cart' element={<Cart />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
