import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const Store = () => {
  return (
    <>
      <h1 className='p-3'>Welcome to the store!</h1>
      <Row xs={1} md={3} className='g-4'>
        {products.map(product => (
          <Col align='center' key={product.name}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
