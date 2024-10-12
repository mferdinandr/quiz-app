import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, onChange, value } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-secondary placeholder:opacity-70"
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
