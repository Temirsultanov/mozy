import React, { forwardRef, useState } from "react"
import "./style.scss"

import { Eye } from "../../lib/components/Eye";
import { Form, SuccessSubmit } from "../../lib/components/Form";
import { Footer } from "../../lib/components/Footer";
import { SocialLinks } from "../../lib/components/SocialLinks";

export const ContactsAndFooter = forwardRef(({ className }, ref) => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section ref={ref} id="contacts-us" className={className + " contactsAndFooter"}>
            <div className="contacts">
                <div className="contacts__titleSection">
                    <h4 className="contacts__smallTitle">Contacts</h4>
                    <h2 className="contacts__title contacts__title-1">Контакты</h2>
                    <h2 className="contacts__title contacts__title-2">Контакты</h2>
                    <h2 className="contacts__title contacts__title-3">Контакты</h2>
                    <h2 className="contacts__title contacts__title-4">Контакты</h2>
                    <h2 className="contacts__title contacts__title-5">Контакты</h2>
                </div>
                <div className="contacts__content">
                    <Eye className="contacts__eye" />
                    <Form isHide={submitted} setSubmitted={setSubmitted} className="contacts__form" />
                    <SuccessSubmit isOpen={submitted} className="contacts__successSubmit" />
                    <SocialLinks className="contacts__socialLinks" />
                </div>
            </div>
            <Footer></Footer>
        </section>
    )
})