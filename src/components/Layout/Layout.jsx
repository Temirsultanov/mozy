import React from "react";
import "./style.scss";
import { OpenAnimation } from "../OpenAnimation";

export const Layout = ({ children, scroll }) => {
    return (
        <main className={"main " + (scroll ? "" : "main-hide")}>
            <OpenAnimation></OpenAnimation>
            {children}
        </main>
    )
}