import React from 'react';

const Button = ({ children, onClick, type }) => {
  return (
    <button
      type={type}
      className="bg-secondary px-4 py-1 border border-secondary rounded-md font-semibold hover:bg-background hover:text-secondary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
