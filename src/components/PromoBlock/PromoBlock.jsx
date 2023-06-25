import React, { forwardRef } from "react"
import scrollTo from "gatsby-plugin-smoothscroll";
import "./style.scss"

import { Button } from "../../lib/components/Button";
import { Eye } from "../../lib/components/Eye/Eye";
import { Dots } from "./Dots"

const competencies = [
    {
        description: "Приложения для смартфонов на\u00A0IOS\u00A0и\u00A0Android",
        icon: (
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90 30H30V90H90V30Z" fill="#FFE252" />
                <path d="M59.5 81C71.3741 81 81 71.3741 81 59.5C81 47.6259 71.3741 38 59.5 38C47.6259 38 38 47.6259 38 59.5C38 71.3741 47.6259 81 59.5 81Z" fill="#28282A" />
            </svg>
        )
    },
    {
        description: "Веб-сайты и веб-приложения под\u00A0любые\u00A0браузеры",
        icon: (
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 29L45 90.5L58.5 76L67.5 89L77.5 83L69 70L87.5 63L36 29Z" fill="#FFE252" />
            </svg>
        )
    },
    {
        description: "Программы и приложения для компьютеров на\u00A0Windows, Mac и Linux",
        icon: (
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.5714 29.1429L90.8571 39.4286V29.1429H80.5714ZM96 24V44.5714H75.4286V24H96ZM54.8571 36.8571V47.1429L65.1429 36.8571H54.8571ZM70.2857 31.7143V52.2857H49.7143V31.7143H70.2857ZM80.5714 60V70.2857H90.8571L80.5714 60ZM96 54.8571V75.4286H75.4286V54.8571H96Z" fill="#FFE252" />
                <path d="M44.5725 44.5713V59.9999H60.0011V75.4284H75.4297V95.9999H24.0011V44.5713H44.5725ZM29.144 90.857H39.4297V80.5713H29.144V90.857Z" fill="#FFE252" />
            </svg>
        )
    },
    {
        description: "Удобный и красивый дизайн интерфейсов веб-сайтов и приложений",
        icon: (
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 59.7297C28.7187 40.3135 65.7249 13.1307 104 59.7297C90.1098 78.7993 52.8636 105.497 15 59.7297Z" fill="#FFE252" />
                <path d="M59.5 74C67.5081 74 74 67.5081 74 59.5C74 51.4919 67.5081 45 59.5 45C51.4919 45 45 51.4919 45 59.5C45 67.5081 51.4919 74 59.5 74Z" fill="#28282A" />
            </svg>
        ),
    },
]

const Competencies = ({ className }) => {
    return (
        <ul className={className}>
            {competencies.map(competence => (
                <li key={competence.description.slice(5)} className="competence">
                    <div className="competence__icon">{competence.icon}</div>
                    <p className="competence__description">{competence.description}</p>
                </li>
            ))}
        </ul>
    )
}

export const PromoBlock = forwardRef(({ openContacts }, ref) => {
    function openPortfolio() {
        scrollTo("#portfolio");
    }

    return (
        <section ref={ref} data-name="home" className="promoBlock">
            <div className="promoBlock__info">
                <Dots className="promoBlock__dots" />
                <Eye className="promoBlock__eye" />
                <p className="promoBlock__subtitle">Mozy — Digital Agency</p>
                <h1 className="promoBlock__title">Соединяем идеи и&nbsp;технологии</h1>
                <p className="promoBlock__description">Разрабатываем цифровые продукты, которые&nbsp;объединяют бизнесы и клиентов</p>
                <div className="promoBlock__buttons">
                    <Button className="promoBlock__contactsButton" onClick={ openContacts }>Связаться с нами</Button>
                    <Button className="promoBlock__portfolioButton" onClick={ openPortfolio } category="secondary">Смотреть портфолио</Button>
                </div>
            </div>
            <Competencies className="promoBlock__competencies" />
        </section>
    )
})