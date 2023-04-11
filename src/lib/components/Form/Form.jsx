import React, { useState, useRef } from "react";
import "./style.scss";

import { Button } from "../Button";
import { Input, Textarea } from "../Input";
import { getRandomId } from "../../utils";
import { sendRequest, fields } from "../../api";

export const Form = ({ setSubmitted, className, isHide }) => {
    const id = useRef(getRandomId());
    const [reset, setReset] = useState(false);

    function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        sendRequest(formData);

        setReset(true);
        setSubmitted(true);
    }

    return (
        <form method="POST" className={className + " contactsForm " + (isHide ? "contactsForm-hide" : "")} onSubmit={onSubmit}>
            <fieldset>
                <legend className="contactsForm__title"><span className="contactsForm__titleDesktop">Оставьте заявку или </span> свяжитесь с нами</legend>
                <div className="contactsForm__inputs">
                    <Input reset={reset} setReset={setReset} className="contactsForm__input" required type="text" name={fields.name} id={"name" + id} placeholder="Имя" />
                    <Input reset={reset} setReset={setReset} className="contactsForm__input" type="tel" name={fields.phone} id={"phone" + id} placeholder="Телефон" />
                    <Input reset={reset} setReset={setReset} className="contactsForm__input" required type="email" name={fields.email} id={"email" + id} placeholder="Email" />
                </div>
                <Textarea reset={reset} setReset={setReset} className="contactsForm__textarea" name={fields.description} id={"description" + id} placeholder="Опишите ваш проект"></Textarea>
                <div className="contactsForm__buttonAndAcceptionText">
                    <Button type="submit" className="contactsForm__button">Отправить</Button>
                    <p className="contactsForm__acceptionText">
                        Нажимая "Отправить" я даю <a className="contactsForm__link" target="_blank" rel="noreferrer" href="/policy">согласие</a> на обработку персональных данных и&nbsp;ознакомлен с&nbsp;<a className="contactsForm__link" href="/policy" target="_blank" rel="noreferrer">политикой&nbsp;конфиденциальности</a>
                    </p>
                </div>
            </fieldset>
        </form>
    )
}

export const SuccessSubmit = ({ isOpen, className, closePopup }) => {
    return (
        <div className={"successSubmit " + className + (isOpen ? " successSubmit-open" : "")}>
            <h2 className="successSubmit__title">Ваша заявка успешно&nbsp;отправлена</h2>
            <p className="successSubmit__text">В ближайшее время с вами свяжется наш&nbsp;менеджер</p>
            <Button onClick={closePopup} className="successSubmit__button">Вернуться на главную</Button>
        </div>
    )
}