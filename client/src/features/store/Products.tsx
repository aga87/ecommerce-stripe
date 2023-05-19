import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductCard } from './components';
import { products } from './data/products';

export const Products = () => {
  return (
    <Row xs={1} md={3} className='g-4'>
      {products.map(product => (
        <Col align='center' key={product.name}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
