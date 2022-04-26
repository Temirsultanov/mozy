import React from 'react';

import Lottie from "react-lottie";
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css"

import firstAnimationData from "../../../lottie/first-animation.json";
import secondAnimationData from "../../../lottie/second-animation.json";
import thirdAnimationData from "../../../lottie/third-animation.json";

import {heroPageSlider, slider__item} from "./style.module.scss";

const HeroPageSlider = ({className}) => {
    const animationMainOptions = {
        loop: true,
        autoplay: true,
        isClickToPauseDisabled: true,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    }
    const firstAnimationOptions = {
        ...animationMainOptions,
        animationData: firstAnimationData,
    }
    const secondAnimationOptions = {
        ...animationMainOptions,
        animationData: secondAnimationData,
    }
    const thirdAnimationOptions = {
        ...animationMainOptions,
        animationData: thirdAnimationData,
    }

    return (
        <div className={`${className} ${heroPageSlider}`}>
            <Swiper 
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={{delay: 5000}}
            >
                <SwiperSlide className={slider__item}>
                    <Lottie isClickToPauseDisabled={true} options={firstAnimationOptions}></Lottie>
                </SwiperSlide>
                <SwiperSlide className={slider__item}>
                    <Lottie isClickToPauseDisabled={true} options={secondAnimationOptions}></Lottie>
                </SwiperSlide>
                <SwiperSlide className={slider__item}>
                    <Lottie isClickToPauseDisabled={true} options={thirdAnimationOptions}></Lottie>
                </SwiperSlide>
            </Swiper>    
        </div>
    )
};

export default HeroPageSlider;