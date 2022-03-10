import * as React from 'react';
import {input as inputStyle, label as labelStyle, inputWrapper} from "./style.module.scss"

function onChange(e) {
    console.log(this);
    console.log(e);
}

const Input = ({className, type, name, placeholder}) => {
    return (
        <div className={`${inputWrapper} ${className}`}>
            <input onChange={onChange} className={inputStyle} id={`input-${name}`} type={type} name={name}/>
            <label className={labelStyle} htmlFor={name}> {placeholder} </label>
        </div>
        
    )
}

export default Input;