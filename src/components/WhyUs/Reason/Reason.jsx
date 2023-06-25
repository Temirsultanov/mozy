import React from "react";
import "./style.scss";

export const Reason = ({ onClick, className = "", number, Icon, title, text, isActive = false }) => {
    return (
        <li onClick={onClick} className={className + " reason" + (isActive ? " reason-active" : "")}>
            <Icon className="reason__icon"></Icon>
            <h3 className="reason__title">
                {title}
                <sup>0{number}</sup>
            </h3>
            <p className="reason__text">{text}</p>
        </li>
    )
}