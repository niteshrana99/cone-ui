import React from 'react';

const Select = React.forwardRef(({selectOptions, multiple, label, id, onChange, name}, ref) => {
    return (
        <div>
             <select onChange={onChange} name={name} id={id} ref={ref}  multiple={multiple}>
                 {selectOptions.map(selectOption => (
                     <option key={selectOption.value} value={selectOption.value}>{selectOption.label}</option>
                 ))}
                </select>
                <label>{label}</label>
        </div>
    )
})

export default Select
