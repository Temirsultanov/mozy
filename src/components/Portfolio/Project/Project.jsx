import React from "react";
import "./style.scss";

import { StoreLinks } from "../StoreLinks";

export const Project = ({ project }) => {
    return (
        <li className="project">
            <p className="project__subtitle">{project.type}</p>
            <h3 className="project__title">{project.name}</h3>
            <p className="project__description">{project.description}</p>
            <StoreLinks
                className="project__storeLinks"
                playMarketLink={project.playMarketLink}
                appStoreLink={project.appStoreLink}
            />
        </li>
    )
}