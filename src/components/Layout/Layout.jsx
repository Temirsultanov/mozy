import React from "react";
import { OpenAnimation } from "../OpenAnimation";

export const Layout = ({ children }) => {
    return (
        <main>
            <OpenAnimation></OpenAnimation>
            {children}
        </main>
    )
}