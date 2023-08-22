import React, { useState, forwardRef, useCallback } from "react";
import "./style.scss";

import { CloseButton } from "./CloseButton";
import { ContactsLine } from "./ContactsLine";

import { Form } from "../../lib/components/Form";
import { SocialLinks } from "../../lib/components/SocialLinks";

const CLOSE_TIME = 1000;

export const ContactsPopup = forwardRef(({ isClose, close }, ref) => {
    const [submitted, setSubmitted] = useState(false);

    const onCloseButtonClick = useCallback(() => {
        setTimeout(() => {
            setSubmitted(false);
        }, CLOSE_TIME);
        close();
    }, [close])

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
                <div className="contactsPopup__content" style={{display: submitted ? "none" : "flex"}}>
                    <h2 className="contactsPopup__title">Мы готовы к&nbsp;вашим&nbsp;идеям</h2>
                    <p className="contactsPopup__description">Оставьте заявку или свяжитесь с нами</p>
                    <Form id="2" setSubmitted={setSubmitted} className="contactsPopup__form" />
                </div>
                <div className="contactsPopup__content" style={{display: submitted ? "flex" : "none"}}>
                    <h2 className="contactsPopup__title">Ваша заявка успешно&nbsp;отправлена</h2>
                    <p className="contactsPopup__description">В ближайшее время с вами свяжется&nbsp;наш&nbsp;менеджер</p>
                </div>
                <ContactsLine className="contactsPopup__line" />
                <SocialLinks className="contactsPopup__socialLinks" />
            </div>
        </section>
    )
});