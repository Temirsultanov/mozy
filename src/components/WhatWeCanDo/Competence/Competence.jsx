import React from "react";
import "./style.scss";

import { Button } from "../../../lib/components/Button";

export const Competence = ({ className, name, icon, number, title, text, decorTitle, openContacts }) => {
    return (
        <li className={className + " competence"}>
            <div className="competence__iconWrapper">
                {icon}
            </div>
            <span className="competence__number">0{number}</span>
            <h3 className="competence__title">{title}</h3>
            <hr className="competence__line" />
            <p className="competence__text">{text}</p>
            <h4 className="competence__decorTitle">{decorTitle}</h4>
            <Button onClick={openContacts} className="competence__button">Связаться с нами</Button>
        </li>
    )
}