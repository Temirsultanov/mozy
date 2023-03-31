import React from "react";
import "./style.scss";

export const QuestionButton = ({ isActive, number, title, onClick }) => {
    return (
        <button onClick={onClick} className={"question" + (isActive ? " question-active" : "")}>
            <span className="question__number">{number}</span>
            <span className="question__title">{title}</span>
        </button>       
    )
}