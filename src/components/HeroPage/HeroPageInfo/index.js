import * as React from 'react';
import {StaticImage} from "gatsby-plugin-image";

import Logo from "./Logo"
import Tooltip from "./Tooltip";
import ContactButton from "./ContactButton";
import Circles from "./Circles";

import {grid, grid__item, logo, title, title__outer, title__inner, tooltip, contactButton, contactButtonWrapper, picture, picture__text, sliderInfo, sliderInfo__number, sliderInfo__text, circles} from "./style.module.scss";

const HeroPageInfo = ({className, openContacts}) => {
    return (
        <div className={`${className} ${grid}`}>
            <div className={grid__item}>
                <Logo className={logo}></Logo>
                <h1 className={title}>
                        <span className={title__outer}>
                            <span className={title__inner}>Соединяем идеи</span>
                        </span>
                        <span className={title__outer}>
                            <span className={title__inner}>и технологии</span>
                        </span>
                </h1>
                <Tooltip className={tooltip}></Tooltip>
                <div className={contactButtonWrapper}>
                    <ContactButton className={contactButton} onClick={openContacts}></ContactButton>
                </div>
            </div>
            <div className={grid__item}>
                <StaticImage className={picture} src="../../../images/girl_on_bicycle.jpg" alt="Techno picture"/>
                <h4 className={picture__text}>Cтремимся сделать жизни<br/>людей лучше</h4>
            </div>
            <div className={grid__item}>
                <div className={sliderInfo}>
                    <h5 className={sliderInfo__number}>01 — 03</h5>
                    <h3 className={sliderInfo__text}>React Native</h3>
                </div>
                <Circles className={circles}></Circles>
            </div>
        </div>
    )
};

export default HeroPageInfo;