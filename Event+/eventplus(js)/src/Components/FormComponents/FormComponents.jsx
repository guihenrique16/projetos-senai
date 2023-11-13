import React from 'react';

export const Input =({
    type,
    id,
    value,
    required,
    additionalClass,
    name,
    placeholder,
    manipulationFunction

}) => {
    return(
        <input 
        type={type}
        id={id}
        value={value}
        required={required}
        className={`input-component ${additionalClass}`}
        name={name}
        placeholder={placeholder}
        onChange={manipulationFunction}
        autoComplete='off'
        />
    );
}