import * as React from 'react';
import {closeButton as closeButtonStyle} from "./style.module.scss";

const CloseButton = ({className}) => {
    return (
        <button className={`${closeButtonStyle} ${className}`} >
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.10051" y1="20.1464" x2="20.1924" y2="1.05456" stroke="#2E5E6A"/>
                <line x1="1.80761" y1="1.14645" x2="20.8995" y2="20.2383" stroke="#2E5E6A"/>
            </svg>
        </button>
    )
}

export default CloseButton;