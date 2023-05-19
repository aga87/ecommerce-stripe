import React from 'react';
import { Card, CardText } from '../../../components';
import { AddToCartButton } from '../../cart';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const productPrice = `€${product.price.toFixed(2)}`;

  return (
    <Card title={product.name}>
      <CardText text={productPrice} />
      <AddToCartButton product={product} />
    </Card>
  );
};
