import React from 'react';

export const Title = ({ children }) => {
  return <div className="text-text font-bold text-4xl">{children}</div>;
};

export const Heading = ({ children }) => {
  return <div className="text-text font-bold text-2xl">{children}</div>;
};

export const SubHeading = ({ children }) => {
  return <div className="text-text font-bold text-xl">{children}</div>;
};

export const Text = ({ children }) => {
  return <div className="text-text text-sm">{children}</div>;
};
