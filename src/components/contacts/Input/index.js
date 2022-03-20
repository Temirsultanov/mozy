import * as React from 'react';
import {input as inputStyle, label as labelStyle, inputWrapper} from "./style.module.scss"

const randomNumber = Math.floor((Math.random() * 100000)).toString();

const Input = ({className, type, isTextArea = false, name, placeholder}) => {
    return (
        <div className={`${inputWrapper} ${className}`}>
            { isTextArea ?
                <textarea className={inputStyle} name={name} id={`input-${name}${randomNumber}`}/>
                : <input className={inputStyle}  name={name} type={type} id={`input-${name}${randomNumber}`}/>
            }
            <label className={labelStyle} htmlFor={`input-${name}${randomNumber}`}> {placeholder} </label>
        </div>
        
    )
}

export default Input;