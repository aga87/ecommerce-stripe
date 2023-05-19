import React from 'react';
import Alert from 'react-bootstrap/Alert';

type ErrorProps = {
  text: string;
};

export const Error = ({ text }: ErrorProps) => {
  return <Alert variant='danger'>{text}</Alert>;
};
