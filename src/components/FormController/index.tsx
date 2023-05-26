import { memo } from "react";
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

type FormControllerProps = {
  name: string;
  label?: string;
  helperText?: string;
  defaultValue?: string;
  error?: Merge<FieldError, FieldErrorsImpl<[]>>;
} & ControllerProps;

const FormController: React.FC<FormControllerProps> = ({
  name,
  label,
  helperText,
  defaultValue,
  error,
  ...props
}) => {
  return (
    <div className="form-controller">
      <label htmlFor={name}>{label || name}</label>
      <Controller defaultValue={defaultValue || ""} name={name} {...props} />
      <small>{helperText}</small>
      <small>{error?.message}</small>
    </div>
  );
};

export default memo(
  FormController,
  (prev, next) =>
    prev.name === next.name &&
    prev.label === next.label &&
    prev.helperText === next.helperText &&
    prev.error === next.error
);
