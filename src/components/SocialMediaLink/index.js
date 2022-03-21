import * as React from 'react';
import {socialLink} from "./style.module.scss";

const SocialMediaLink = ({className, children, href}) => {
    return (
        <a href={href} className={`${socialLink} ${className}`}> {children} </a>
    )
};

export default SocialMediaLink;