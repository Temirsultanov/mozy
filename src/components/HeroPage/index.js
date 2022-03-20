import * as React from "react";

import HeroPageSlider from "./HeroPageSlider/index.js"
import HeroPageInfo from "./HeroPageInfo/index.js"

import {heroPage, circles, heroPageInfo, heroPageSlider} from "./style.module.scss";

const HeroPage = () => {
    return (
        <section className={heroPage}>
            <svg className={circles} width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#E0E2EE"/>
                <circle cx="35" cy="5" r="5" fill="#3D6D79"/>
                <circle cx="65" cy="5" r="5" fill="#3D6D79"/>
                <circle cx="65" cy="35" r="5" fill="#3D6D79"/>
                <circle cx="35" cy="35" r="5" fill="#E0E2EE"/>
                <circle cx="5" cy="35" r="5" fill="#E0E2EE"/>
            </svg>
            <HeroPageInfo className={heroPageInfo}></HeroPageInfo>
            <HeroPageSlider className={heroPageSlider}></HeroPageSlider>
        </section>
    )
};

export default HeroPage;