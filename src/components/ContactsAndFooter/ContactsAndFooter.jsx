import React, { useState, forwardRef, useCallback } from "react"
import "./style.scss"

import { Form, SuccessSubmit } from "../../lib/components/Form";
import { Footer } from "../../lib/components/Footer";
import { Logo } from "../../lib/components/Logo";

export const ContactsAndFooter = forwardRef(({}, ref) => {
    const [submitted, setSubmitted] = useState(false);

    const closeSuccessSubmit = useCallback(() => {
        setSubmitted(false);
    }, [])

    return (
        <section ref={ref} id="contacts" data-name="contacts" className="contactsAndFooter">
            <div className="contacts">
                <div className="contacts__content">
                    <h2 className="contacts__title">Контакты</h2>
                    <p className="contacts__description">Свяжитесь с нами и мы обсудим ваш проект, бесплатно составим техническое задание и сориентируем по срокам и стоимости</p>
                    <Form id="1" setSubmitted={setSubmitted} className="contacts__form" />
                    <SuccessSubmit close={closeSuccessSubmit} isOpen={submitted} className="contacts__successSubmit" />
                </div>
                <div className="contacts__benefits benefits">
                    <p className="benefits__text benefits__text-conversion">Повышаем конверсию</p>
                    <p className="benefits__text benefits__text-analysis">Глубокий анализ</p>
                    <p className="benefits__text benefits__text-lead">Выводим в топы</p>
                    <p className="benefits__text benefits__text-terms">Соблюдаем сроки</p>
                    <div className="benefits__line"></div>
                    <Logo className="benefits__logo" />
                </div>
            </div>
            <Footer></Footer>
        </section>
    )
})