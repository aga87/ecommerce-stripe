import React from 'react';
import CardComponent from 'react-bootstrap/Card';

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export const Card = ({ title, children }: CardProps) => {
  return (
    <CardComponent>
      <CardComponent.Body>
        <CardComponent.Title>{title}</CardComponent.Title>
        {children}
      </CardComponent.Body>
    </CardComponent>
  );
};
