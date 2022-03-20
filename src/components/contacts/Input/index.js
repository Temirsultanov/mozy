import React, { useState } from 'react';
import {input as inputStyle, label as labelStyle, inputWrapper, inputFilled} from "./style.module.scss"

const randomNumber = Math.floor((Math.random() * 100000)).toString();

const Input = ({className, type, isTextArea = false, name, placeholder}) => {
    const [inputClassName, setInputClassName] = useState(`${inputStyle}`);
    const onChangeHandler = function(event) {
        if (event.target.value.trim() === "") {
            setInputClassName(`${inputStyle}`);
        } else {
            setInputClassName(`${inputStyle} ${inputFilled}`);
        }
    }
    return (
        <div className={`${inputWrapper} ${className}`}>
            { isTextArea ?
                <textarea onChange={onChangeHandler} className={inputClassName} name={name} id={`input-${name}${randomNumber}`}/>
                : <input onChange={onChangeHandler} className={inputClassName}  name={name} type={type} id={`input-${name}${randomNumber}`}/>
            }
            <label className={labelStyle} htmlFor={`input-${name}${randomNumber}`}> {placeholder} </label>
        </div>
        
    )
}

export default Input;