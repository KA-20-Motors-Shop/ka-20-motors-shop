import { InputHTMLAttributes } from "react";
// import { FieldValues, UseFormRegister } from "react-hook-form";
import TextField from "./style";

interface TextAreaProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name?: string;
  // register: UseFormRegister<FieldValues>;
}

const TextArea = ({ label, error, name, ...rest }: TextAreaProps) => {
  return (
    <TextField>
      {label && <label>{label}</label>}
      <input {...rest} />
      {!!error && (
        <div className="error">
          <span>{error}</span>
        </div>
      )}
    </TextField>
  );
};

export default TextArea;
