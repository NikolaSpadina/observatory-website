import React from "react";
import { useField } from "formik";
import { AuTextInput } from "../../helpers/auds";

interface TextFieldProps {
  label: string;
  id: string;
  aria_label?: string;
  btnText?: string;
  className?: string;
  required?: boolean;
  defaultValue?: string;
  width?: string;
  dark?: boolean;
  wrapper?: string;
  type?: string;
}

const SubscribeField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  const [field, meta] = useField({ name: props.id, ...props });
  const error = meta.touched && meta.error ? meta.error : "";

  return (
    <>
      <label
        htmlFor={props.id}
        className={`au-body ${props.dark ? "au-body--dark" : ""}`}
      >
        {props.label}
      </label>
      <AuTextInput {...props} {...field} />
    </>
  );
};

export default SubscribeField;