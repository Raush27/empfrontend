import React, { FC, SelectHTMLAttributes } from 'react';
interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  error?: string;
  placeholder?: string;
  options: OptionProps[];
}

interface OptionProps {
  value: string;
  label: string;
}

const SimpleSelectOption: FC<InputProps> = ({ name, label, error, placeholder, options, ...rest }) => {
  return (
    <div className="form-group pb-3">
      <label htmlFor={name}>{label}</label>
      <select className={`form-select ${error ? 'form-control-input-border-error' : ''}`} name={name} {...rest}>
        {placeholder ? <option value="">{placeholder}</option> : ''}
        {options &&
          options.map((item: OptionProps, index: number) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </select>
      {error && (
        <small id="emailHelp" className="form-text text-danger">
          {error}
        </small>
      )}
    </div>
  );
};

export default SimpleSelectOption;
