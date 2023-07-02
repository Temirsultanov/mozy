import React, { useState } from "react";
import "./style.scss";

import { Button } from "../Button";
import { Input, Textarea } from "../Input";
import { sendRequest } from "../../api";

export const Form = ({ setSubmitted, className, id }) => {
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
        // sendRequest(data.name, data.phone, data.email, data.description);

        setReset(true);
        setSubmitted(true);
    }

    return (
        <form method="POST" className={className + " contactsForm"} onSubmit={onSubmit}>
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

export const SuccessSubmit = ({ isOpen, className, close }) => {
    return (
        <div onClick={close} className={"successSubmit " + className + (isOpen ? " successSubmit-open" : "")}>
            <div onClick={(e) => e.stopPropagation()} className="successSubmit__inner">
                <button onClick={close} className="successSubmit__closeButton">
                    <CloseIcon className="successSubmit__closeIcon"/>
                </button>
                <CheckIcon className="successSubmit__checkIcon" />
                <h3 className="successSubmit__title">Ваша заявка успешно отправлена</h3>
                <p className="successSubmit__description">В ближайшее время с вами свяжется наш менеджер</p>
            </div>
        </div>
    )
}

const CloseIcon = ({ className }) => {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 15L1 1M15 1L1 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const CheckIcon = ({ className }) => {
    return (
        <svg className={className} width="79" height="78" viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.5 0C17.9956 0 0.5 17.4956 0.5 39C0.5 60.5044 17.9956 78 39.5 78C61.0044 78 78.5 60.5044 78.5 39C78.5 17.4956 61.0044 0 39.5 0ZM59.7969 25.9294L34.5969 55.9294C34.3204 56.2586 33.9765 56.5246 33.5883 56.7093C33.2001 56.8941 32.7767 56.9932 32.3469 57H32.2962C31.8758 56.9998 31.46 56.9113 31.0759 56.7401C30.6919 56.5689 30.3481 56.3189 30.0669 56.0063L19.2669 44.0063C18.9926 43.7153 18.7792 43.3725 18.6393 42.998C18.4994 42.6234 18.4358 42.2247 18.4522 41.8252C18.4686 41.4257 18.5647 41.0335 18.7348 40.6717C18.9049 40.3099 19.1457 39.9857 19.4429 39.7183C19.7401 39.4508 20.0877 39.2455 20.4654 39.1143C20.8431 38.9831 21.2432 38.9288 21.6422 38.9544C22.0412 38.9801 22.4311 39.0853 22.7889 39.2637C23.1466 39.4422 23.4651 39.6904 23.7256 39.9937L32.2175 49.4287L55.2031 22.0706C55.7187 21.4745 56.4482 21.1053 57.2338 21.0427C58.0195 20.9801 58.7982 21.2291 59.4017 21.7361C60.0052 22.243 60.385 22.967 60.4589 23.7517C60.5328 24.5364 60.295 25.3186 59.7969 25.9294Z" fill="#3C972B"/>
        </svg>
    )
}