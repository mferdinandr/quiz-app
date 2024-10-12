const Label = (props) => {
  const { htmlFor, children, className } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`text-secondary text-sm font-bold ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
