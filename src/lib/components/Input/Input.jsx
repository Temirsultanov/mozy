import React, { useState, useMemo, useEffect } from "react";
import "./style.scss";

export const Input = ({ reset, setReset, className, placeholder, name, type, required, id }) => {
    const [value, setValue] = useState("");
    
    useEffect(() =>{ 
        if (reset === true) setValue("");
    }, [reset])

    const onInput = function(event) {
        setValue(event.target.value);
        setReset(false);
    }
    const inputClassName = useMemo(() => {
        let res = "input";
        if (value.length > 0) res = res + " input__filled"
        return res;
    }, [value])

    return (
        <div className={className + " input__wrapper"}>
            <input value={value} onInput={onInput} required={required} type={type} id={id} name={name} className={inputClassName} />
            <label htmlFor={id} className="input__label" value={value}>{placeholder}</label>
        </div>
    )
}

export const Textarea = ({ reset, className, placeholder, name, required, id }) => {
    const [value, setValue] = useState("");

    useEffect(() =>{ 
        setValue("");
    }, [reset])

    const onInput = function(event) {
        setValue(event.target.value);
    }
    const inputClassName = useMemo(() => {
        let res = "textarea";
        if (value.length > 0) res = res + " textarea__filled"
        return res;
    }, [value])
    return (
        <div className={className + " textarea__wrapper"}>
            <textarea onInput={onInput} required={required} id={id} name={name} className={inputClassName} value={value}></textarea>
            <label htmlFor={id} className="textarea__label">{placeholder}</label>
        </div>
    )
}