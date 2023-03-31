import React from "react";
import "./style.scss"

import { SOCIALS } from "../../../lib/constants";

export const Links = ({ className, openContacts }) => {
    return (
        <ul className={className + " links"}>
            <li className="links__item">
                <a className="link" href={SOCIALS["email"].href} target="_blank" rel="noreferrer">
                    <span className="link__icon link__icon-circle"></span>
                    { SOCIALS["email"].title }
                </a>    
            </li>
            <li className="links__item">
                <button onClick={openContacts} className="link">
                    <svg className="link__icon link__icon-triangle" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 1L13.9952 12.25H1.00481L7.5 1Z" fill="#FDAA5A"/>
                    </svg>
                    Связаться с нами
                </button>
            </li>
        </ul>
    )
}