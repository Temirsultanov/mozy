import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./style.scss";


import { Tags } from "../Tags";
import { StoreLinks } from "../StoreLinks";

export const Project = ({ number, project, image }) => {
    return (
        <li className="project">
            <span className="project__number">0{number}</span>
            <Tags className="project__tags" tags={project.tags} />
            <p className="project__subtitle">{project.type}</p>
            <h3 className="project__title">{project.name}</h3>
            <p className="project__description">{project.description}</p>
            <StoreLinks
                className="project__storeLinks"
                playMarketLink={project.playMarketLink}
                appStoreLink={project.appStoreLink}
            />
            <div className="project__photoWrapper">
                <GatsbyImage alt="Фотография проекта" className="project__photo" image={image} />
            </div>
        </li>
    )
}