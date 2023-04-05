import React from "react";
import Lottie from "react-lottie";
import lottieAnimation from "../../../lottie/animation.json";

export const Animation = () => {
    const animationOptions = {
        loop: true,
        autoplay: true,
        isClickToPauseDisabled: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        },
        animationData: lottieAnimation,
    }

    return <Lottie options={animationOptions} />
}