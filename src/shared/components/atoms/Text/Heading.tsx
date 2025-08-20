import { JSX } from 'react';
import { HeadingProps } from './types';

export const Heading = ({
  level = 1,
  children,
  className = '',
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={`heading-${level} ${className}`}>
      {children}
    </Tag>
  );
};