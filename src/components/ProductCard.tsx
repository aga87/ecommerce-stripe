import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>€{product.price.toFixed(2)}</Card.Text>
        <Button variant='primary'>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};
