import React from "react";
import "./style.scss"

export const Spinner = ({ className }) => {
    return (
        <div className={className + " spinner"}>
            <div className="spinner__circle"></div>
            <div className="spinner__rectangle-1 spinner__rectangle"></div>
            <div className="spinner__rectangle-2 spinner__rectangle"></div>
        </div>   
    )
}