import React from "react";
import "./style.scss";

const DecreaseButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="controller controller-decrease">
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.3187 23.396H16.7341L28.4858 11.6443L25.5006 8.68005L8.68237 25.4982L25.5006 42.3164L28.4648 39.3522L16.7341 27.6005H42.3187V23.396Z" fill="#FDAA5A"/>
            </svg>
        </button>
    )
}

const IncreaseButton = ({ onClick}) => {
    return (
        <button onClick={onClick} className="controller controller-increase">
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.3187 23.396H16.7341L28.4858 11.6443L25.5006 8.68005L8.68237 25.4982L25.5006 42.3164L28.4648 39.3522L16.7341 27.6005H42.3187V23.396Z" fill="#FDAA5A"/>
            </svg>
        </button>
    )
}

export const Controllers = ({ className, increment, decrement}) => {
    return (
        <div className={className + " controllers"}>
            <DecreaseButton onClick={decrement} />
            <IncreaseButton onClick={increment} />
        </div>
    )
}