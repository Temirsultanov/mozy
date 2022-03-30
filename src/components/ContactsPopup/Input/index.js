import React, { useState } from 'react';
import {input, label, inputWrapper, inputFilled} from "./style.module.scss"


const Input = ({className, isTextArea = false, type, name, placeholder}) => {
    const randomNumber = Math.floor((Math.random() * 100000)).toString(); // какая-то уязвимость, но как создать уникальный id?
    const inputId = `input-${name}${randomNumber}`;

    const [inputClassName, setInputClassName] = useState(`${input}`);

    const properties = {
        name,
        className: inputClassName,
        onChange: onChangeHandler,
        id: inputId,
    }

    function onChangeHandler(event) {
        const inputValue = event.target.trim();
        const newInputClassName = inputValue === "" ? input : `${input} ${inputFilled}`;
        setInputClassName(newInputClassName);
    }

    return (
        <div className={`${inputWrapper} ${className}`}>
            { isTextArea ?
                <textarea {...properties} />
                : <input {...properties} type={type}/>
            }
            <label className={label} htmlFor={`input-${name}${randomNumber}`}> {placeholder} </label>
        </div>
    )
}

export default Input;