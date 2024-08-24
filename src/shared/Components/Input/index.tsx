import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

const Input: FC<InputProps> = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group pb-3">
      <label htmlFor={name}>{label}</label>
      <input
        suppressHydrationWarning
        className={`form-control ${
          error ? "form-control-input-border-error" : ""
        }`}
        name={name}
        {...rest}
      />
      {error ? (
        <small id="emailHelp" className="form-text text-danger">
          {error}
        </small>
      ) : null}
    </div>
  );
};

export default Input;
