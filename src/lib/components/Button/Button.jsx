import React from "react";
import "./style.scss"

export const Button = ({ children, className, onClick, type, size = "normal", category = "primary" }) => {
    return (
        <button type={type} onClick={onClick} className={`button button-${size} button-${category} ${className}`}>
            {children}
        </button>
    )
}