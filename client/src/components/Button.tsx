import React from 'react';
import ButtonComponent from 'react-bootstrap/Button';

type ButtonProps = {
  text: string;
  variant?: 'primary' | 'danger' | 'success';
  size?: 'sm' | undefined;
  handleClick: () => void;
  disabled?: boolean;
};

export const Button = ({
  variant = 'primary',
  size,
  text,
  handleClick,
  disabled = false
}: ButtonProps) => {
  return (
    <ButtonComponent
      variant={variant}
      size={size}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </ButtonComponent>
  );
};
