import Label from '../Label';
import Input from '../Input';
import { forwardRef } from 'react';

const RadioInput = forwardRef((props, ref) => {
  const { className, label, name, type, placeholder, onChange, value } = props;
  return (
    <div className="flex items-center">
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        value={value}
        className="mr-2"
      />
      <Label htmlFor={name} className={`flex items-center ${className}`}>
        {label}
      </Label>
    </div>
  );
});

export default RadioInput;
