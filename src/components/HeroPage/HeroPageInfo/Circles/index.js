import React from 'react';

import {circles} from "./style.module.scss";

const Circles = ({className}) => {
    return (
        <svg className={`${circles} ${className}`} width="160" height="130" viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="95" r="5" fill="#E0E2EE"/>
            <circle cx="5" cy="125" r="5" fill="#E0E2EE"/>
            <circle cx="35" cy="95" r="5" fill="#E0E2EE"/>
            <circle cx="35" cy="125" r="5" fill="#E0E2EE"/>
            <circle cx="65" cy="95" r="5" fill="#E0E2EE"/>
            <circle cx="65" cy="125" r="5" fill="#E0E2EE"/>
            <circle cx="95" cy="35" r="5" fill="#E0E2EE"/>
            <circle cx="95" cy="65" r="5" fill="#E0E2EE"/>
            <circle cx="95" cy="95" r="5" fill="#E0E2EE"/>
            <circle cx="95" cy="125" r="5" fill="#E0E2EE"/>
            <circle cx="125" cy="95" r="5" fill="#E0E2EE"/>
            <circle cx="125" cy="5" r="5" fill="#E0E2EE"/>
            <circle cx="125" cy="35" r="5" fill="#E0E2EE"/>
            <circle cx="155" cy="95" r="5" fill="#E0E2EE"/>
            <circle cx="155" cy="35" r="5" fill="#E0E2EE"/>
            <circle cx="155" cy="125" r="5" fill="#E0E2EE"/>
            <circle cx="155" cy="65" r="5" fill="#E0E2EE"/>
            <circle cx="125" cy="125" r="5" fill="#E0E2EE"/>
            <circle cx="125" cy="65" r="5" fill="#E0E2EE"/>
            <circle cx="155" cy="5" r="5" fill="#E0E2EE"/>
        </svg>
    );
};

export default Circles;