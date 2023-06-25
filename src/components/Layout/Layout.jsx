import React from "react";

import { Header } from "./Header";
import { Aside } from "./Aside"

export const Layout = ({ children, openContacts, visibleSection }) => {
    return (
        <main>
            <Header openContacts={openContacts} visibleSection={visibleSection} />
            <Aside />
            {children}
        </main>
    )
}