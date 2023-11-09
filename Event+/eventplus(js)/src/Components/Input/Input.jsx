import React, { useState } from 'react';

const Input = (props) => {
    const [meuValor, setMeuValor] = useState();
    return (
        <div>
            <input type={props.tipo} 
            id={props.id}
            name={props.name}
            placeholder={props.placeholder} 
            value={props.value}
            onChange={(e)=> {
                props.fnAltera(e.target.value)
            }}
            />
            <span>{props.valor}</span>
        </div>
    );
};

export default Input;