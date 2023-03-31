import React from "react";
import "./style.scss"

export const Eye = ({ className, dark = false }) => {
    return (
        <svg className={"eye " + (dark ? "eye-dark " : "") + className} width="60" height="35" viewBox="0 0 60 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.5076 32.8918C25.5803 34.9912 13.7022 32.0629 1.63101 17.6254C6.07417 11.4704 14.0805 4.24615 23.9409 2.11899C33.8444 -0.0174389 45.7495 2.96122 57.9542 17.6662C53.4563 23.7093 45.3872 30.8026 35.5076 32.8918Z" stroke="#FDAA5A"/>
            <path className="pupil" d="M38.9199 17.5C38.9199 22.5283 34.8437 26.6045 29.8154 26.6045C24.7872 26.6045 20.7109 22.5283 20.7109 17.5C20.7109 12.4717 24.7872 8.39551 29.8154 8.39551C34.8437 8.39551 38.9199 12.4717 38.9199 17.5Z" stroke="#FDAA5A"/>
        </svg>
    )  
}