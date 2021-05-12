import {ErrorMessage, useField} from 'formik';

export const InputField = ({label, ...props}) => {
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
