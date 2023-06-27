import React, { useState, useMemo, useEffect } from "react";
import "./style.scss";

export const Input = ({ reset, setReset, className = "", placeholder, name, type, required, id }) => {
    const [value, setValue] = useState("");
    
    useEffect(() =>{ 
        if (reset === true) setValue("");
    }, [reset])

    const onInput = function(event) {
        setValue(event.target.value);
        setReset(false);
    }

    return (
        <input 
            onInput={onInput} 
            placeholder={placeholder}
            value={value} 
            required={required} 
            type={type} 
            id={id} 
            name={name} 
            className={"input " + className} 
        />
    )
}

export const Textarea = ({ reset, className = "", placeholder, name, required, id }) => {
    const [value, setValue] = useState("");

    useEffect(() =>{ 
        setValue("");
    }, [reset])

    const onInput = function(event) {
        setValue(event.target.value);
    }

    return (
        <textarea 
            onInput={onInput} 
            placeholder={placeholder}
            required={required} 
            id={id} 
            name={name} 
            className={"textarea " + className} 
            value={value}
        >
        </textarea>
    )
}