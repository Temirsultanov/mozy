import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./style.scss";

export const Employee = ({ photo, role, name, surname }) => {
    return (
        <div className="employee">
            <GatsbyImage className="employee__photo" image={photo} alt={name}/>
            <p className="employee__role">{role}</p>
            <h3 className="employee__name">
                <span>{name} </span>
                <span>{surname}</span>
            </h3>
        </div>
    )
}