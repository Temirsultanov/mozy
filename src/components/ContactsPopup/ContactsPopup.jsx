import React, { useState, forwardRef } from "react";
import "./style.scss";

import { CloseButton } from "./CloseButton";
import { ContactsLine } from "./ContactsLine";

import { Form, SuccessSubmit } from "../../lib/components/Form";
import { SocialLinks } from "../../lib/components/SocialLinks";

const CLOSE_TIME = 1000;

export const ContactsPopup = forwardRef(({ isClose, close }, ref) => {
    const [submitted, setSubmitted] = useState(false);

    function onCloseButtonClick() {
        setTimeout(() => {
            setSubmitted(false);
        }, CLOSE_TIME);
        close();
    }

    function onTouchStart(event) {
        event.stopPropagation();
    }

    return (
        <section ref={ref} id="contacts-us-modal" onTouchStart={onTouchStart} className={"contactsPopup " + (isClose ? "contactsPopup-close" : "")}>
            <div className="contactsPopup__left"></div>
            <div className="contactsPopup__right"></div>
            <div className="contactsPopup__inner">
                <CloseButton className="contactsPopup__closeButton" onClick={onCloseButtonClick} />
                <ContactsLine className="contactsPopup__line" />
                <h2 className={"contactsPopup__title " + (submitted ? "contactsPopup__title-hide" : "")}>Мы готовы к&nbsp;вашим&nbsp;идеям</h2>
                <Form id="2" setSubmitted={setSubmitted} className="contactsPopup__form" />
                <ContactsLine className="contactsPopup__line" />
                <SocialLinks className="contactsPopup__socialLinks" />
            </div>
        </section>
    )
});