import React from "react";
import "./style.scss";

const PlusIcon = ({ className }) => {
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.77734 7.77734L24.2218 24.2218M24.2218 7.77734L7.77734 24.2218" stroke="white" strokeWidth="0.888889" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Reason = ({ onClick, className = "", number, Icon, title, text, isActive = false }) => {
    return (
        <li onClick={onClick} className={className + " reason" + (isActive ? " reason-active" : "")}>
            <PlusIcon className="reason__plusIcon" />
            <Icon className="reason__icon"></Icon>
            <h3 className="reason__title">
                {title}
                <sup>0{number}</sup>
            </h3>
            <p className="reason__text">{text}</p>
        </li>
    )
}