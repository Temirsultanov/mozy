import React from "react";
import "./style.scss";

import { SOCIALS } from "../../constants";
import { socialIcons } from "./SocialIcons";

let socials = [];
for (let key in SOCIALS) {
    socials.push({
        name: key,
        title: SOCIALS[key].title,
        href: SOCIALS[key].href,
        icon: socialIcons[key],
    })
}

const SocialLink = ({ className, icon, href, name }) => {
    return (
        <a className={className + " socialLink"} target="_blank" href={href} rel="noreferrer" aria-label={name}>
            <span className="socialLink__circle"></span>
            <span className="socialLink__icon">{icon}</span>
        </a>
    )
}

export const SocialLinks = ({ className }) => {
    return (
        <ul className={"socialLinks " + className}>
            {socials.map(social => (
                <li key={social.name}>
                    <SocialLink
                        className={"socialLink socialLink-" + social.name}
                        href={social.href}
                        name={social.name + " - " + social.title}
                        icon={social.icon}
                    />
                </li>
            ))}
        </ul>
    )
}