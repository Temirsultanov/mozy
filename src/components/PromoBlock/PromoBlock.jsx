import React, { forwardRef } from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./style.scss"

import { Eye } from "../../lib/components/Eye";
import { Button } from "../../lib/components/Button";
import { ArrowHeader, ArrowBody } from "./Arrow";
import { Dots } from "./Dots"
import { Links } from "./Links";
import { Animation } from "./Animation";


const Header = ({ openBrief }) => {
    return (
        <header className="promoBlock__header">
            <StaticImage placeholder="#254F59" className="promoBlock__logo" src="../../images/logo.png" alt="Логотип Mozy" />
            <ArrowHeader></ArrowHeader>
            <Button onClick={openBrief} className="promoBlock__button promoBlock__button-header">Заполнить бриф</Button>
        </header>
    )
}

const EyeAndCompetencies = () => {
    return (
        <div className="promoBlock__eyeAndCompetencies">
            <Eye className="promoBlock__eye"></Eye>
            <h3 className="promoBlock__competencies">Mobile / Web / Desktop</h3>
        </div>
    )
}

export const PromoBlock = forwardRef(({ className, openPortfolio, openBrief, openContacts }, ref) => {
    return (
        <section ref={ref} id="home" className={className + " promoBlock"}>
            <div className="promoBlock__info">
                <Links openContacts={openContacts} className="promoBlock__links"></Links>
                <Header openBrief={openBrief}></Header>
                <EyeAndCompetencies></EyeAndCompetencies>
                <div className="promoBlock__borderLeft">
                    <Dots className="promoBlock__dots" />
                    <ArrowBody></ArrowBody>
                    <h1 className="promoBlock__title">Соединяем идеи<br />и&nbsp;технологии</h1>
                    <p className="promoBlock__description">Разрабатываем сайты и приложения, <br />которые&nbsp;объединят&nbsp;ваш&nbsp;бизнес и&nbsp;клиентов</p>
                </div>
                <Button onClick={openBrief} className="promoBlock__button promoBlock__button-brief">Заполнить бриф</Button>
                <Button onClick={openPortfolio} className="promoBlock__button promoBlock__button-portfolio">Смотреть портфолио</Button>
            </div>
            <div className="promoBlock__animation">
                <Animation></Animation>
            </div>
        </section>
    )
})