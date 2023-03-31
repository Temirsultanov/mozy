import React from "react";
import "./style.scss";

const Tag = ({ className, children }) => {
    return (
        <li className={"tag " + className}>{children}</li>
    )
}

export const Tags = ({ tags, className }) => {
    return (
        <ul className={className + " tags"}>
            {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </ul>
    )
}