import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./style.scss";

export const ProjectPhoto = ({ project }) => {
    return (
        <>
            <TakeAPlace className={(project === 0 ? "projectPhoto-visible" : "projectPhoto-hidden")} />
            <PoVoenke className={(project === 1 ? "projectPhoto-visible" : "projectPhoto-hidden")} />
            <RDWComputers className={(project === 2 ? "projectPhoto-visible" : "projectPhoto-hidden")} />
            <FarmIO className={(project === 3 ? "projectPhoto-visible" : "projectPhoto-hidden")} />
        </>
    )
}

const TakeAPlace = ({ className }) => {
    return (
        <div className={"takeaplace " + className}>
            <div className="takeaplace__circle"></div>
            <StaticImage className="takeaplace__1" src="../../../images/takeaplace_billing.png" alt="Скриншот мобильного приложения Take A Place: Оплата" />
            <StaticImage className="takeaplace__2" src="../../../images/takeaplace_card.png" alt="Скриншот мобильного приложения Take A Place: Карточка ко-воркинга" />
            <StaticImage className="takeaplace__3" src="../../../images/takeaplace_mvp.png" alt="Скриншот мобильного приложения Take A Place: Вступительный экран" />
        </div>
    )
}

const PoVoenke = ({className }) => {
    return (
        <div className={"poVoenke " + className}>
            <div className="poVoenke__circle"></div>
            <div className="poVoenke__row poVoenke__row-1">
                <StaticImage className="poVoenke__image" src="../../../images/povoenke_list.png" alt="Скриншот мобильного приложения поВоенке: Хиты продаж" />
                <StaticImage className="poVoenke__image" src="../../../images/povoenke_list.png" alt="Скриншот мобильного приложения поВоенке: Хиты продаж" />
            </div>
            <div className="poVoenke__row poVoenke__row-2">
                <StaticImage className="poVoenke__image" src="../../../images/povoenke_card.png" alt="Скриншот мобильного приложения поВоенке: проект Звезда Морей, Мытищи" />
                <StaticImage className="poVoenke__image" src="../../../images/povoenke_allowing.png" alt="Скриншот мобильного приложения поВоенке: Одобрение ипотеки" />
            </div>
            <div className="poVoenke__row poVoenke__row-3">
                <StaticImage className="poVoenke__image" src="../../../images/povoenke_calc.png" alt="Скриншот мобильного приложения поВоенке: Калькуляция ипотеки" />
                <StaticImage className="poVoenke__image poVoenke__image-standart" src="../../../images/povoenke_standart.png" alt="Скриншот мобильного приложения поВоенке: Тариф 'Стандарт'" />
                <StaticImage className="poVoenke__image poVoenke__image-raif" src="../../../images/povoenke_raif.png" alt="Скриншот мобильного приложения поВоенке: Предложение от Райфазенбанка" />
            </div>
        </div>
    )
}

const RDWComputers = ({ className }) => {
    return (
        <div className={"rdwComputers " + className}>
            <StaticImage 
                className="rdwComputers__logo" 
                src="../../../images/rdw_logo.svg" 
                alt="Логотип RDW Computers"
            />
            <StaticImage 
                className="rdwComputers__image rdwComputers__image-select" 
                src="../../../images/rdw_select.png" 
                alt="Скриншот веб-приложения RDW Computers: Выбор платформы"
            />
            <StaticImage 
                className="rdwComputers__image rdwComputers__image-marketing" 
                src="../../../images/rdw_marketing.png" 
                alt="Скриншот веб-приложения RDW Computers: Маркетинговые материалы"
            />
            <StaticImage 
                className="rdwComputers__image rdwComputers__image-main" 
                src="../../../images/rdw_main.png" 
                alt="Скриншот веб-приложения RDW Computers: Главная страница"
            />
        </div>
    )
}

const FarmIO = ({ className }) => {
    const [hover, setHover] = useState(false);
    function onMouseEnter() {
        setHover(true);
    }
    function onMouseLeave() {
        setHover(false);
    }
    return (
        <div className={"farmIO " + className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <StaticImage className="farmIO__background" src="../../../images/farmio_bg.png" alt="Farm.io - децентрализованное веб-приложение для проведения киберспортивных матчей и турниров по Dota 2."/>
            <StaticImage className="farmIO__computer" src="../../../images/farmio_computer.png" alt="Скриншот веб-приложения Farm.io: Выигрыш"/>
            <div className={"farmIO__line" + (hover ? " farmIO-hover" : " farmIO-leave")}>
                <span className="farmIO__text">FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO  • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO • FARM.IO</span>
            </div>
        </div>
    )
}