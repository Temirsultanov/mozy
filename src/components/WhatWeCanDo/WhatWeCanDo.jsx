import React, { forwardRef } from "react"
import "./style.scss";

import { Competence } from "./Competence";
import { competenceIcons } from "./CompetenceIcons/CompetenceIcons";
import { Eye } from "../../lib/components/Eye";

const competencies = [
    {
        name: "mobile",
        title: <span>iOS / Android<br />Разработка</span>,
        text: "Реализуем мобильные приложения на React Native — с   помощью фреймворка разрабатываем проекты сразу и\u00A0на IOS, и\u00A0на Android. Решение экономит время и\u00A0ускоряет дату релиза в полтора раза.",
        decorTitle: "IOS / Android Development"
    },
    {
        name: "web",
        title: <span>Web<br />Разработка</span>,
        text: "95% веб-приложений делаем на стеке React и Node.js. Занимаемся как фронтендом, так и бэкендом. Специализация на одном языке помогает разрабатывать проекты в\u00A0краткие сроки без потери в качестве.",
        decorTitle: "Web Development"
    },
    {
        name: "desktop",
        title: <span>Win<span className="competence__desktopElem">dows</span> / Mac<span className="competence__desktopElem">OS</span> / Linux<br />Разработка</span>,
        text: "Создаем кроссплатформенные приложения под все ведущие операционные системы. С\u00A0помощью технологии Electron код пишем только один раз, а разработанный проект работает сразу на\u00A0трех\u00A0ОС.",
        decorTitle: "Desktop Development"
    },
    {
        name: "design",
        title: <span>UX / UI<br />Дизайн</span>,
        text: "Делаем прототипы, выстраиваем бренд, прорабатываем пользовательские сценарии. Ведем проект от первого экрана до готового дизайна продукта. В\u00A0конце работы организуем UX-интервью, чтобы убедиться в удобстве созданной платформы.",
        decorTitle: "UX / UI Design"
    },
].map(competence => {
    competence.icon = competenceIcons[competence.name]
    return competence;
})

export const WhatWeCanDo = forwardRef(({ className, openContacts }, ref) => {
    return (
        <section ref={ref} id="services" className={className + " whatWeCanDo"}>
            <div className="whatWeCanDo__titleAndEye">
                <h2 className="whatWeCanDo__title">Что мы делаем</h2>
                <Eye dark={true} className="whatWeCanDo__eye" />
            </div>
            <ol className="competencies">
                {competencies.map((competence, index) => (
                    <Competence
                        key={competence.name}
                        openContacts={openContacts}
                        number={index + 1}
                        {...competence}
                        className={"competencies__item competencies__item-" + competence.name}
                    />
                ))}
            </ol>
        </section>
    )
})