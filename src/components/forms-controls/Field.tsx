import React from "react";

type TField = {
  id: string
  label: string
  value: string
  name: string
  type?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Field: React.FC<TField> = (props) => {
  const {
    id,
    name,
    label,
    value,
    type = 'text',
    handleChange
  } = props

  return (
      <label htmlFor={id} className='mr-3'>
        <input id={id} type={type} name={name} value={value} onChange={handleChange}/>
        {label}
      </label>
  )
}