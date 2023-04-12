import { useCallback } from "react";
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormSetValue,
  UseFormStateReturn,
} from "react-hook-form";

type FormControllerProps = {
  name: string;
  label?: string;

  helperText?: string;
  defaultValue?: string;
  control: Control<FieldValues>;
  render: (
    field: ControllerRenderProps<FieldValues, string>,
    setValue?: UseFormSetValue<{
      [x: string]: unknown;
    }>
  ) => React.ReactElement;
  error?: Merge<FieldError, FieldErrorsImpl<[]>>;
};

const FormController: React.FC<FormControllerProps> = ({
  name,
  label,
  helperText,
  defaultValue,
  control,
  render,
  error,
}) => {
  const setRender = useCallback(
    ({
      field,
    }: {
      field: ControllerRenderProps<FieldValues, string>;
      fieldState: ControllerFieldState;
      formState: UseFormStateReturn<FieldValues>;
    }) => {
      return render(field);
    },
    [render]
  );

  return (
    <>
      <label htmlFor={name}>{label || name}</label>
      <Controller
        defaultValue={defaultValue || ""}
        control={control}
        name={name}
        render={setRender}
      />
      <small>{helperText}</small>
      <small>{error?.message}</small>
    </>
  );
};

export default FormController;
