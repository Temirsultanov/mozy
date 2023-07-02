import React from "react";
import "./style.scss"

export const CloseButton = ({ className, onClick }) => {
    return (
        <button className={"closeButton " + className} onClick={onClick}>
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.646447" y1="20.6455" x2="19.7383" y2="1.55359" stroke="#28282A"/>
                <line x1="1.35355" y1="1.64547" x2="20.4454" y2="20.7374" stroke="#28282A"/>
            </svg>
        </button>
    )
}