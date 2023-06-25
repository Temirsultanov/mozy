import React from "react";

import { SOCIALS, SOCIAL_ICONS } from "../../../lib/constants";
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
                                {SOCIAL_ICONS[key]}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}
