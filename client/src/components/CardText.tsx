import React from 'react';
import Card from 'react-bootstrap/Card';

type CardTextProps = {
  text: string;
};

export const CardText = ({ text }: CardTextProps) => {
  return <Card.Text>{text}</Card.Text>;
};
