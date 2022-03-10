import * as React from 'react';
import {socialLink} from "./style.module.scss";

const SocialMediaLink = ({children, href}) => {
    return (
        <a href={href} className={socialLink}> {children} </a>
    )
};

export default SocialMediaLink;