import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Cancel, Store, Success } from './pages';

export const App = () => {
  return (
    <Container>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
