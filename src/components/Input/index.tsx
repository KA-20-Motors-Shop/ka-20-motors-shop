import { InputHTMLAttributes } from "react";
// import { FieldValues, UseFormRegister } from "react-hook-form";
import InputOne from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name: string;

  // register: UseFormRegister<FieldValues>;
}

const Input = ({ label, error, name, ...rest }: InputProps) => {
  return (
    <InputOne>
      {label && <label>{label}</label>}
      <input {...rest} />
      {!!error && (
        <div className="error">
          <span>{error}</span>
        </div>
      )}
    </InputOne>
  );
};

export default Input;
