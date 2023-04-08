import React, { forwardRef, useState } from "react"
import { StaticImage } from "gatsby-plugin-image";
import "./style.scss"

import { Eye } from "../../lib/components/Eye";
import { QuestionButton } from "./QuestionButton/QuestionButton";
import { AnswerMobile, AnswerDesktop } from "./Answer";

const questionsMobile = [
    {
        name: "Цена",
        title: "Стоимость начинается от",
        attributes: [
            {
                title: "500 000 ₽",
                description: "мобильное приложение",
            },
            {
                title: "300 000 ₽",
                description: "веб приложение",
            },
            {
                title: "700 000 ₽",
                description: "десктопное приложение",
            }
        ],
        description: (<>
            <span>Чтобы получить более точную стоимость разработки проекта — заполните <a className="answer__link" href="/brief">бриф</a>. После&nbsp;его&nbsp;заполнения мы с вами свяжемся</span>
            <span>Затем мы бесплатно составим техническое задание для определения финальных сроков&nbsp;и&nbsp;цены. Вам останется только решить, подходят условия или нет</span>
        </>)
    },
    {
        name: "Сроки",
        title: null,
        attributes: [],
        description: (<>
            <span>Первый рабочий прототип — через 30 дней с момента утверждения ТЗ.</span>
            <span>Сроки разработки всего проекта определяются при составлении ТЗ.</span>
            <span>В среднем стандартные проекты разрабатываются до 6 месяцев, сложные — дольше. Все&nbsp;зависит от объема проекта и ваших желаний</span>
        </>)
    },
    {
        name: "Технологии",
        title: "Для разработки используем JavaScript",
        attributes: [
            {
                title: "Мобильные приложения —",
                description: "React Native, Typescript",
            },
            {
                title: "Веб приложения —",
                description: "React, Typescript",
            },
            {
                title: "Десктопные приложения —",
                description: "Electron, React, Typescript",
            },
            {
                title: "Серверная часть —",
                description: "NodeJS, NestJS, Typescript",
            },
        ],
        description: (<>
            <span>Специализация на одном языке помогает «не распыляться» и держать экспертность&nbsp;на&nbsp;высоком уровне. Поэтому мы разрабатываем проекты в&nbsp;краткие&nbsp;сроки&nbsp;без&nbsp;потери&nbsp;в&nbsp;качестве</span>
        </>)
    }
]

const questionsDesktop = [
    {
        name: "Цена",
        title: "Стоимость начинается от",
        attributes: [
            {
                title: "Мобильное приложение",
                description: "500 000 ₽",
            },
            {
                title: "Веб приложение",
                description: "300 000 ₽",
            },
            {
                title: "Десктопное приложение",
                description: "700 000 ₽",
            }
        ],
        description: (<>
            <span>Чтобы получить более точную стоимость разработки проекта — заполните <a className="answer__link" href="/brief">бриф</a>. После&nbsp;его&nbsp;заполнения мы с вами свяжемся</span>
            <span>Затем мы бесплатно составим техническое задание для определения финальных сроков&nbsp;и&nbsp;цены. Вам останется только решить, подходят условия или нет</span>
        </>)
    },
    {
        name: "Сроки",
        title: "Cроки c момента утверждения ТЗ",
        attributes: [
            {
                title: "Первый рабочий прототип",
                description: "через 30 дней"
            }
        ],
        description: (<>
            <span>Сроки разработки всего проекта определяются при составлении ТЗ.</span>
            <span>В среднем стандартные проекты разрабатываются до 6 месяцев, сложные — дольше. Все&nbsp;зависит от объема проекта и ваших желаний</span>
        </>)
    },
    {
        name: "Технологии",
        title: "Для разработки используем JavaScript",
        attributes: [
            {
                title: "Мобильные приложения",
                description: "React Native, Typescript",
            },
            {
                title: "Веб приложения",
                description: "React, Typescript",
            },
            {
                title: "Десктопные приложения",
                description: "Electron, React, Typescript",
            },
            {
                title: "Серверная часть",
                description: "NodeJS, NestJS, Typescript",
            },
        ],
        description: (<>
            <span>Специализация на одном языке помогает «не распыляться» и держать экспертность&nbsp;на&nbsp;высоком уровне. Поэтому мы разрабатываем проекты в&nbsp;краткие&nbsp;сроки&nbsp;без&nbsp;потери&nbsp;в&nbsp;качестве</span>
        </>)
    }
]

export const Faq = forwardRef(({ className }, ref) => {
    const [currentQuestion, setCurrentQuestion] = useState(questionsDesktop[0].name);

    const onButtonClick = function (questionNumber) {
        setCurrentQuestion(questionNumber)
    }

    return (
        <section ref={ref} id="faq" className={className + " faq"}>
            <div className="faq__questionsBlock">
                <div className="faq__titles">
                    <h4 className="faq__smallTitle">Faq</h4>
                    <h2 className="faq__title">Частые вопросы</h2>
                </div>
                <Eye className="faq__eye"></Eye>
                <ul className="faq__questions">
                    {questionsDesktop.map((question, index) => (
                        <li key={question.name}>
                            <QuestionButton
                                isActive={currentQuestion === question.name}
                                number={"0" + (index + 1)}
                                title={question.name}
                                onClick={onButtonClick.bind(null, question.name)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="faq__answers faq__answers-desktop">
                {questionsDesktop.map(question => (
                    <AnswerDesktop
                        key={question.name}
                        isActive={question.name === currentQuestion}
                        title={question.title}
                        attributes={question.attributes}
                        description={question.description}
                    />
                ))}
            </ul>
            <ul className="faq__answers faq__answers-mobile">
                {questionsMobile.map(question => (
                    <AnswerMobile
                        key={question.name}
                        title={question.name}
                        subtitle={question.title}
                        attributes={question.attributes}
                        description={question.description}
                    />
                ))}
            </ul>
            <div className="faq__pictureWrapper">
                <StaticImage className="faq__picture" src="../../images/faq.png" alt="Question mark" />
            </div>
        </section>
    )
})