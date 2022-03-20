import * as React from 'react';

import {heroPageSlider} from "./style.module.scss";

const HeroPageSlider = ({className}) => {
    return (
        <div className={`${className} ${heroPageSlider}`}>
            <h1>mozy / animation</h1>
        </div>
    )
};

export default HeroPageSlider;