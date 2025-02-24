import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  onClick,
  type = 'button',
  link,
  className = '',
}) => {
  if (link) {
    return (
      <Link
        to={link}
        className={
          'bg-secondary px-4 py-1 border border-secondary rounded-md hover:bg-background hover:text-secondary ' +
          className
        }
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={
        'bg-secondary px-4 py-1 border border-secondary rounded-md hover:bg-background hover:text-secondary ' +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
