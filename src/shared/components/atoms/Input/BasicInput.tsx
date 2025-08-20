import React from 'react';
import { BasicInputProps } from './types';

export const BasicInput = ({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
}: BasicInputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`basic-input ${className}`}
    />
  );
};