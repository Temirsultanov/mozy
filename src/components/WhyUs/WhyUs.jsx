import React, { forwardRef, useState } from "react"
import "./style.scss";

import { Button } from "../../lib/components/Button";
import { Eye } from "../../lib/components/Eye";
import { Reason } from "./Reason";
import { reasonIcons } from "./ReasonIcons"

const reasons = [
    {
        number: 1,
        name: "all",
        title: "Всё включено",
        text: "Мы с вами на всех этапах создания проекта: от разработки технического задания и дизайна до публикации проекта и его дальнейшей поддержки"
    },
    {
        number: 2,
        name: "terms",
        title: "Прототип через 30 дней",
        text: "Первый прототип разработаем через 30 дней после утверждения условий. Срок всей разработки и штраф при его несоблюдении фиксируем в договоре"
    },
    {
        number: 3,
        name: "price",
        title: "Поэтапная оплата",
        text: "Разработка разбивается на двухнедельные спринты, которые оплачиваются постепенно. Цена фиксированная и закрепляется в договоре"
    },
    {
        number: 4,
        name: "quality",
        title: "Быстро и качественно",
        text: "Специализируемся на одном языке программирования, поэтому делаем проекты быстро и качественно. Наши решения легко масштабировать и поддерживать"
    },
    {
        number: 5,
        name: "analysis",
        title: "Анализ бизнес-процессов",
        text: "Не просто разработаем продукт, но и проанализируем бизнес-процессы вашей компании, чтобы предложить автоматизированные решения для их улучшения"
    },
    {
        number: 6,
        name: "support",
        title: "1 год поддержки",
        text: "Дарим 1 год бесплатной поддержки проекта после релиза. Запустим проект на ваших серверах, проследим за работой связанных с проектом сервисов"
    },
].map(reason => {
    reason.icon = reasonIcons[reason.name]
    return reason;
})

const Footer = ({ openContacts }) => {
    return (
        <footer className="whyUs__footer">
            <Button onClick={openContacts} className="whyUs__button">Связаться с нами</Button>
            <Eye className="whyUs__eye" light={true} />
        </footer>
    )
}

export const WhyUs = forwardRef(({ className, openContacts }, ref) => {
    const [activeReason, setActiveReason] = useState(null);
    const onReasonClick = (nextReason) => {
        setActiveReason((prevReason) => {
            return prevReason === nextReason ? null : nextReason;
        })
    }

    return (
        <section ref={ref} id="why-us" data-name="why-us" className={className + " whyUs"}>
            <h2 className="whyUs__title">Почему мы</h2>
            <ul className="whyUs__reasons">
                {reasons.map((reason) => (
                    <Reason
                        isActive={activeReason === reason.number}
                        onClick={() => onReasonClick(reason.number)}
                        key={reason.name}
                        number={reason.number}
                        Icon={reason.icon}
                        title={reason.title}
                        text={reason.text}
                    />
                ))}
            </ul>
            <Footer openContacts={ openContacts }></Footer>
        </section>
    )
})