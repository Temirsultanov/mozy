import * as React from 'react';

import {contactButton, contactButton__text, contactButton__arrow} from "./style.module.scss";

const ContactButton = ({className}) => {
    return (
        <button className={`${contactButton} ${className}`}>
            <span className={contactButton__text}>Связаться с нами</span>
            <svg className={contactButton__arrow} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5528 28.227L22.5792 16.0001L10.5528 3.77319" stroke="#FDAA5A" strokeWidth="1.51887" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}

export default ContactButton;
