import Label from './Label';
import Input from './Input';
import { forwardRef } from 'react';

const InputForm = forwardRef((props, ref) => {
  const { className, label, name, type, placeholder, onChange, value } = props;
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        className="w-full"
        type={type}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        value={value}
      />
    </div>
  );
});

export default InputForm;
