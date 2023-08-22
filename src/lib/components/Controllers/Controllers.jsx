import React from "react";
import "./style.scss";

export const Controllers = ({ className, decrement = null, increment = null, prevButtonRef, nextButtonRef }) => {
    return (
        <div className={"controllers " + className}>
            <button ref={prevButtonRef} onClick={ decrement }>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3337 12.8327H9.13533L15.657 6.31102L14.0003 4.66602L4.66699 13.9993L14.0003 23.3327L15.6453 21.6877L9.13533 15.166H23.3337V12.8327Z" fill="#28282A"/>
                </svg>
            </button>
            <button ref={nextButtonRef} onClick={ increment }>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3337 12.8327H9.13533L15.657 6.31102L14.0003 4.66602L4.66699 13.9993L14.0003 23.3327L15.6453 21.6877L9.13533 15.166H23.3337V12.8327Z" fill="#28282A"/>
                </svg>
            </button>
        </div>
    )
}