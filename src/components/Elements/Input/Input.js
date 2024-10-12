import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, onChange, value, className } = props;
  return (
    <input
      type={type}
      className={`text-sm border rounded py-2 px-3 text-secondary placeholder:opacity-70 ${className}`}
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
      onChange={onChange}
      value={value}
    />
  );
});
export default Input;
