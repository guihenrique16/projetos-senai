import React from 'react';
import './FormComponents.css'

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

export const Button = ({
    id,
    name,
    type,
    additionalClass ='',
    textButton,
    manipulationFunction
}) => {
    return(
        <button 
        type={type}
        name={name}
        id={id}
        className={`button-component ${additionalClass}`}
        onClick={manipulationFunction}
        >
           {textButton}
        </button>
    )
}

export const Select = ({
    options = [],
    id,
    name,
    required,
    additionalClass,
    manipulationFunction,
    defaultValue
}) =>{
    return(
        <select 
        name={name} 
        id={id}
        required={required}
        className={`input-component ${additionalClass}`}
        onChange={manipulationFunction}
        value={defaultValue}
        >
            <option value="">Selecione</option>
            {options.map((opt) => {
                return <option key={opt.value} value={opt.idtipoEvento}>{opt.titulo}</option>
            })}
        </select>
    );
}