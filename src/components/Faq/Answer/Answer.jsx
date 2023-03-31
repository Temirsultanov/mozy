import React from "react";
import "./style.scss";

export const AnswerMobile = ({ title, subtitle, attributes, description }) => {
    return (
        <li className="answer answer-mobile">   
            <h3 className="answer__title">{ title }</h3>
            {subtitle ? (
                <h3 className="answer__subtitle">{ subtitle }</h3>
            ) : null}
            {attributes.length > 0 ? (
                <ul className="answer__attributes">
                    {attributes.map(attribute => (
                        <li key={attribute.title}>
                            <h4 className="answer__attributeTitle">{ attribute.title }</h4>
                            <h4 className="answer__attributeDescription"> { attribute.description }</h4>
                        </li>
                    ))}
                </ul>
            ): null}
            <p className="answer__description">{description}</p>
        </li>
    )
}

export const AnswerDesktop = ({ isActive, title, attributes, description }) => {
    return (
        <li className={"answer answer-desktop" + (isActive ? " answer-active" : "")}>   
            <h3 className="answer__title">{ title }</h3>
            <ul className="answer__attributes">
                {attributes.map(attribute => (
                    <li key={attribute.title}>
                        <h4 className="answer__attributeTitle">{ attribute.title }</h4>
                        <h4 className="answer__attributeDescription">{ attribute.description }</h4>
                    </li>
                ))}
            </ul>
            <p className="answer__description">{description}</p>
        </li>
    )
}