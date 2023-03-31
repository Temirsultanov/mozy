import React, { useState, useEffect, useRef } from "react";
import "./style.scss";

import { CloseButton } from "./CloseButton";
import { ContactsLine } from "./ContactsLine";

import { Form, SuccessSubmit } from "../../lib/components/Form";
import { SocialLinks } from "../../lib/components/SocialLinks";

export const ContactsPopup = ({ isClose, close }) => {
    const [submitted, setSubmitted] = useState(false);

    function closeWrapper() {
        setTimeout(() => {
            setSubmitted(false);
        }, 1000);
        close();
    }

    return (
        <section className={"contactsPopup " + (isClose ? "contactsPopup-close" : "")}>
            <div className="contactsPopup__left"></div>
            <div className="contactsPopup__right"></div>
            <div className="contactsPopup__inner">
                <CloseButton className="contactsPopup__closeButton" onClick={closeWrapper} />
                <ContactsLine className="contactsPopup__line" />
                <h2 className={"contactsPopup__title " + (submitted ? "contactsPopup__title-hide" : "")}>Мы готовы к&nbsp;вашим&nbsp;идеям</h2>
                <Form isHide={submitted} setSubmitted={setSubmitted} className="contactsPopup__form" />
                <SuccessSubmit isOpen={submitted} closePopup={closeWrapper} className="contactsPopup__successSubmit" />
                <ContactsLine className="contactsPopup__line" />
                <SocialLinks className="contactsPopup__socialLinks" />
            </div>
        </section>
    )
};