import React from "react";
import "./style.scss"

export const Eye = ({ className, light = false }) => {
    return (
        <svg className={"eye " + className + (light ? " eye-light" : "")} width="68" height="38" viewBox="0 0 68 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="eye__ball" d="M0 19.1711C10.4817 4.70416 38.7561 -15.5496 68 19.1711C57.3873 33.3798 28.9295 53.2721 0 19.1711Z" fill="#28282A" />
            <path className="eye__pupil" d="M34.0226 30.0593C40.2861 30.0593 45.3636 25.1077 45.3636 18.9996C45.3636 12.8915 40.2861 7.93994 34.0226 7.93994C27.7592 7.93994 22.6816 12.8915 22.6816 18.9996C22.6816 25.1077 27.7592 30.0593 34.0226 30.0593Z" fill="#FFE252" />
        </svg>
    )
}