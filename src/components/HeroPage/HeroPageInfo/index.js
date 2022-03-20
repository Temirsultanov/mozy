import * as React from 'react';
import {StaticImage} from "gatsby-plugin-image";

import Logo from "./Logo/index.js"
import Hint from "./Hint/index.js";
import ContactButton from "./ContactButton/index.js";

import {grid, grid__item, title, hint, contactButton, picture, picture__text, sliderInfo__number, sliderInfo__text, circles} from "./style.module.scss";

const HeroPageInfo = ({className}) => {
    return (
        <div className={`${className} ${grid}`}>
            <div className={grid__item}>
                <Logo></Logo>
                <h1 className={title}>Соединяем идеи и&nbsp;технологии</h1>
                <Hint className={hint}></Hint>
                <ContactButton className={contactButton}></ContactButton>
            </div>
            <div className={grid__item}>
                <StaticImage className={picture} src="../../../images/girl_on_bicycle.jpg" alt="Techno picture"/>
                <h4 className={picture__text}>Cтремимся сделать жизни<br/>людей лучше</h4>
            </div>
            <div className={grid__item}>
                <div>
                    <h5 className={sliderInfo__number}>01 — 03</h5>
                    <h3 className={sliderInfo__text}>React Native</h3>
                </div>
                <svg className={circles} width="160" height="130" viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="95" r="5" fill="#E0E2EE"/>
                    <circle cx="5" cy="125" r="5" fill="#E0E2EE"/>
                    <circle cx="35" cy="95" r="5" fill="#E0E2EE"/>
                    <circle cx="35" cy="125" r="5" fill="#E0E2EE"/>
                    <circle cx="65" cy="95" r="5" fill="#E0E2EE"/>
                    <circle cx="65" cy="125" r="5" fill="#E0E2EE"/>
                    <circle cx="95" cy="35" r="5" fill="#E0E2EE"/>
                    <circle cx="95" cy="65" r="5" fill="#E0E2EE"/>
                    <circle cx="95" cy="95" r="5" fill="#E0E2EE"/>
                    <circle cx="95" cy="125" r="5" fill="#E0E2EE"/>
                    <circle cx="125" cy="95" r="5" fill="#E0E2EE"/>
                    <circle cx="125" cy="5" r="5" fill="#E0E2EE"/>
                    <circle cx="125" cy="35" r="5" fill="#E0E2EE"/>
                    <circle cx="155" cy="95" r="5" fill="#E0E2EE"/>
                    <circle cx="155" cy="35" r="5" fill="#E0E2EE"/>
                    <circle cx="155" cy="125" r="5" fill="#E0E2EE"/>
                    <circle cx="155" cy="65" r="5" fill="#E0E2EE"/>
                    <circle cx="125" cy="125" r="5" fill="#E0E2EE"/>
                    <circle cx="125" cy="65" r="5" fill="#E0E2EE"/>
                    <circle cx="155" cy="5" r="5" fill="#E0E2EE"/>
                </svg>

            </div>
        </div>
    )
};

export default HeroPageInfo;