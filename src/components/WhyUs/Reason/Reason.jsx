import React from "react";
import "./style.scss";
import { TriangularLine } from "../TriangularLine";

export const Reason = ({ className, number, Icon, title, text }) => {
    return (
        <li className={className + " reason"}>
            <span className="reason__number">0{number}</span>
            <Icon className="reason__icon"></Icon>
            <div className="reason__content">
                <h3 className="reason__title">
                    {title.map(row => <span key={row}>{row}</span>)}
                </h3>
                {text.map(paragraph => (
                    <p key={paragraph} className="reason__text">{paragraph}</p>
                ))}
            </div>
            <TriangularLine className="reason__line" />
        </li>
    )
}