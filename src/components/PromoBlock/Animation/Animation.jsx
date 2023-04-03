import React, { useState, useLayoutEffect } from "react";
import "./style.scss";

export const Animation = () => {
    const [animation, setAnimation] = useState(true);
    useLayoutEffect(() => {
        setInterval(() => {
            setAnimation(false);
        }, 10500)
        setInterval(() => {
            setAnimation(true);
        }, 11000)
    }, []);
    return (animation ? <div className="animation animation-start">
        <div className="animation__rectangle animation__rectangle-1"></div>
        <div className="animation__rectangle animation__rectangle-2"></div>
        <div className="animation__rectangle animation__rectangle-3"></div>
        <div className="animation__rectangle animation__rectangle-4"></div>
        <div className="animation__rectangle animation__rectangle-5"></div>
        <div className="animation__rectangle animation__rectangle-6"></div>
    </div> : null)
}