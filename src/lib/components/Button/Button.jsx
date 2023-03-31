import React from "react";
import "./style.scss"

export const Button = ({ children, className, onClick, type }) => {
    return (
        <button type={type} onClick={onClick} className={"primaryButton " + className}>{ children }</button>
    )
}