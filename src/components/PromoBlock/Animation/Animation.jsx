import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import lottieAnimation from "../../../lottie/animation.json";

export const Animation = () => {
    const wrapper = useRef(null);
    const animationStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    };
    useEffect(() => {
        wrapper.current.animationContainerRef.current.children[0].setAttribute("preserveAspectRatio", "xMidYMid slice");
    }, []);
    return <Lottie lottieRef={wrapper} animationData={lottieAnimation} loop={true} autoPlay={true} style={animationStyle} />
}