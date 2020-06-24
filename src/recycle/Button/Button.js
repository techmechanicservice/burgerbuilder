import React from 'react';
import './button.scss'

const Button = (props) => {
    return(
        <button
            className={`button ${props.btnType}`}
            onClick={props.clicked}
            type={props.type}
            disabled={props.disabled}
        >
        {props.children}
        </button>
    )
}


export default Button;