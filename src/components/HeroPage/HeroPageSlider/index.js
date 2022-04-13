import * as React from 'react';
import Lottie from "react-lottie";
import firstAnimation from "../../../lottie/first-animation.json";

import {heroPageSlider} from "./style.module.scss";

const HeroPageSlider = ({className}) => {
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: firstAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className={`${className} ${heroPageSlider}`}>
            <Lottie options={animationOptions}></Lottie>
        </div>
    )
};

export default HeroPageSlider;