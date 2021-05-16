import {ErrorMessage, useField } from 'formik';
import React, {ReactNode} from "react";

interface FieldProps {
  label: string
  name: string
  type: string
  children?: ReactNode;
  [key: string]: any
}

export const InputField: React.FC<FieldProps> = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const flag = meta?.touched && meta?.error;

    return (
        <div className="form-group">
            <label htmlFor={field?.name}>{label}:</label>
            <input
                className={`form-control ${flag ? 'is-invalid' : null}`}
                {...props} {...field}
                autoComplete="off"/>
            {flag ? (<div className="invalid-feedback"><ErrorMessage
                name={field?.name}/></div>) : null}
        </div>
    );
};
