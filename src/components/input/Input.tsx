import { InputProps } from "./Input.Model";

const Input = ({ type, placeholder, value, onChange, ...rest }:InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange} {...rest}
    />
  );
};

export default Input;
