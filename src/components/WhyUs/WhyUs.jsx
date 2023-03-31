import React from "react"
import "./style.scss";

import { Button } from "../../lib/components/Button";
import { Spinner } from "./Spinner";
import { Reason } from "./Reason";
import { TriangularLine } from "./TriangularLine/";
import { reasonIcons } from "./ReasonIcons"

const reasons = [
    {
        number: 1, 
        name: "team",
        title: ["Готовая команда", "полного цикла"],
        text: ["Будем вести вас на всех этапах создания проекта: разработка технического задания, прототипирование, дизайн, разработка приложения, тестирование, исправление багов, публикация и\u00A0дальнейшая поддержка"]
    },
    {
        number: 2,
        name: "price",
        title: ["Фиксированная стоимость", "проекта и поэтапная оплата"],
        text: ["Бесплатно поможем сделать техническое задание, после чего зафиксируем стоимость проекта.", "Разработка разбивается на двухнедельные спринты, каждый из которых оплачивается отдельно."]
    },
    {
        number: 3,
        name: "terms",
        title: ["Быстрые сроки", "разработки"],
        text: ["Отвечаем за оговорённые сроки и прописываем штрафы в договоре за их несоблюдение.", "Разработчики, дизайнеры и тестировщики состоят в штате компании. Поэтому команда приступает к работе быстро, не тратя время на поиск и подбор специалистов."]
    },
    {
        number: 4,
        name: "tech",
        title: ["Современные технологии", "IT-решений"],
        text: ["Следим за трендами в разработке и дизайне. Поэтому создаем актуальные технологические решения, которые легко масштабировать и поддерживать."]
    },
    {
        number: 5,
        name: "optimizations",
        title: ["Оптимизация", "бизнес-процессов"],
        text: ["Проведем анализ бизнес-процессов вашей компании и\u00A0предложим автоматизированные решения для их\u00A0улучшения"]
    },
    {
        number: 6,
        name: "support",
        title: ["Поддержка", "после релиза"],
        text: ["Следим за трендами в разработке и дизайне. Поэтому создаем актуальные технологические решения, которые легко масштабировать и поддерживать."]
    },
].map(reason => {
    reason.icon = reasonIcons[reason.name]
    return reason;
})


const Arrow = () => {
    return (
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5459_15628)">
                <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z" fill="#FDAA5A"/>
            </g>
            <defs>
                <clipPath id="clip0_5459_15628">
                    <rect width="9" height="16" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

const Header = ({ openContacts }) => {
    return (
        <header className="whyUs__header">
            <h2 className="whyUs__title">Почему мы</h2>
            <div className="whyUs__arrow"><Arrow></Arrow></div>
            <Button onClick={openContacts} className="whyUs__button">Связаться с нами</Button>
        </header>
    )
}

export const WhyUs = ({ className, openContacts }) => {
    const firstTriple = reasons.slice(0, 3);
    const secondTriple = reasons.slice(3);

    return (
        <section className={className + " whyUs"}>
            <Header openContacts={openContacts}></Header>
            <ul className="whyUs__reasons whyUs__reasons-1">
                {firstTriple.map((reason) => (
                    <Reason 
                        key={reason.name}
                        number={reason.number}
                        Icon={reason.icon}
                        title={reason.title}
                        text={reason.text}
                    />
                ))}
            </ul>
            <TriangularLine className="whyUs__line" />
            <ul className="whyUs__reasons whyUs__reasons-2">
                {secondTriple.map((reason) => (
                    <Reason 
                        key={reason.name}
                        number={reason.number}
                        Icon={reason.icon}
                        title={reason.title}
                        text={reason.text}
                    />
                ))}
            </ul>
            <Spinner className="whyUs__spinner"></Spinner>
        </section>
    )
}