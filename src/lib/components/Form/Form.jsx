import React, { useState } from "react";
import "./style.scss";

import { Button } from "../Button";
import { Input, Textarea } from "../Input";
import { sendRequest } from "../../api";

export const Form = ({ setSubmitted, className, isHide, id }) => {
    const [reset, setReset] = useState(false);

    function onSubmit(event) {
        event.preventDefault();

        const elements = event.target.elements;
        const data = {
            name: elements.name.value,
            phone: elements.phone.value,
            email: elements.email.value,
            description: elements.description.value,
        }
        sendRequest(data.name, data.phone, data.email, data.description);

        setReset(true);
        setSubmitted(true);
    }

    return (
        <form method="POST" className={className + " contactsForm " + (isHide ? "contactsForm-hide" : "")} onSubmit={onSubmit}>
            <div className="contactsForm__inputs">
                <Input reset={reset} setReset={setReset} className="contactsForm__input" required type="text" name="name" id={"name" + id} placeholder="Имя" />
                <Input reset={reset} setReset={setReset} className="contactsForm__input" type="tel" name="phone" id={"phone" + id} placeholder="Телефон" />
                <Input reset={reset} setReset={setReset} className="contactsForm__input" required type="email" name="email" id={"email" + id} placeholder="Email" />
            </div>
            <Textarea reset={reset} setReset={setReset} className="contactsForm__textarea" name="description" id={"description" + id} placeholder="Опишите ваш проект"></Textarea>
            <div className="contactsForm__buttonAndAcceptionText">
                <Button type="submit" className="contactsForm__button">Отправить</Button>
                <p className="contactsForm__acceptionText">
                    Нажимая "Отправить" я даю <a className="contactsForm__link" target="_blank" rel="noreferrer" href="/policy">согласие</a> на обработку персональных данных и&nbsp;ознакомлен с&nbsp;<a className="contactsForm__link" href="/policy" target="_blank" rel="noreferrer">политикой&nbsp;конфиденциальности</a>
                </p>
            </div>
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