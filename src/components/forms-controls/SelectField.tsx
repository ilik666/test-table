import React from "react";

type TSelectField = {
  name: string
  options: Array<string>
  handleValue: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectField: React.FC<TSelectField> = ({name, options, handleValue}) => {
  return (
      <div className='form-group'>
        <select className='form-control' name={name} onChange={handleValue}>
          {  options?.map( opt =>  (<option key={opt} value={opt}>{opt}</option>) ) }
        </select>
      </div>
  )
}