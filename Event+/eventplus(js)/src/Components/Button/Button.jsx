import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button id={props.id} type={props.type}>{props.textoBotao}</button>
        </div>
    );
};

export default Button;