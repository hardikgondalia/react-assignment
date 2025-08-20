import React from 'react';
import { BasicButtonProps } from './types';

export const BasicButton = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}: BasicButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`basic-button ${className}`}
    >
      {children}
    </button>
  );
};