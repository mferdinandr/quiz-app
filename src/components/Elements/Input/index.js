import Label from './Label';
import Input from './Input';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder, onChange, value } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
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
