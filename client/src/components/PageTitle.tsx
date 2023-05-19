import React from 'react';

type PageTitleProps = {
  text: string;
};

export const PageTitle = ({ text }: PageTitleProps) => {
  return <h1 className='p-3 h2'>{text}</h1>;
};
