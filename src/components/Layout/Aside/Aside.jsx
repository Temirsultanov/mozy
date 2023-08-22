import React from "react";

import { SOCIALS } from "../../../lib/constants";
import { socialIcons } from "../../../lib/components/SocialLinks/SocialIcons";
import "./style.scss";

export const Aside = () => {
    return (
        <aside className="aside">
            <h2 className="aside__title">Разрабатываем сайты и приложения</h2>
            <ul className="aside__socialLinks">
                {
                    Object.keys(SOCIALS).map((key) => (
                        <li key={key}>
                            <a href={SOCIALS[key].href}>
                                {socialIcons[key]}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}
