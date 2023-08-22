import React, { useCallback, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import { SOCIALS } from "../../../lib/constants"
import { socialIcons } from "../../../lib/components/SocialLinks/SocialIcons/"
import { BRIEF_LINK } from "../../../lib/constants";

import { Logo } from "../../../lib/components/Logo";
import { Button } from "../../../lib/components/Button";
import "./style.scss";

const MobileMenu = ({ isOpen, closeMobileMenu, openBrief, openContactsAndCloseMenu, visibleSection}) => {
    return (
        <div onClick={closeMobileMenu} className={"mobileMenu " + (isOpen && "mobileMenu-open")}>
            <div onClick={(e) => e.stopPropagation()} className="mobileMenu__inner">
                <button onClick={closeMobileMenu} className="mobileMenu__closeButton" aria-label="Закрыть">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.641918" x2="22.5732" y2="-0.641918" transform="matrix(0.708797 -0.705413 0.708797 0.705413 1 16.9233)" stroke="white" strokeWidth="1.28384"/>
                        <line y1="-0.641918" x2="22.5732" y2="-0.641918" transform="matrix(0.708797 0.705413 -0.708797 0.705413 1 1.07666)" stroke="white" strokeWidth="1.28384"/>
                    </svg>
                </button>
                <nav>
                    <Menu visibleSection={visibleSection} closeMobileMenu={closeMobileMenu}/>
                </nav>
                {/* <ul className="mobileMenu__socialMedias">
                    <li><a aria-label={SOCIALS.telegram.title} href={SOCIALS.telegram.href}>{socialIcons.telegram}</a></li>
                    <li><a aria-label={SOCIALS.whatsapp.title} href={SOCIALS.whatsapp.href}>{socialIcons.whatsapp}</a></li>
                    <li><a aria-label={SOCIALS.email.title} href={SOCIALS.email.href}>{socialIcons.email}</a></li>
                    <li><a aria-label={SOCIALS.phone.title} href={SOCIALS.phone.href}>{socialIcons.phone}</a></li>
                </ul> */}
                <Button onClick={openBrief}>Заполнить бриф</Button>
                <Button onClick={openContactsAndCloseMenu} className="mobileMenu__contactButton" category="secondary">Связаться с нами</Button>
            </div>
        </div>
    )
}

const Menu = ({ className, visibleSection, closeMobileMenu }) => {
    function onKeyDown(e) {
        if (e.key === "Enter") scrollToSection(e);
    }
    
    const scrollToSection = useCallback((event) => {
        event.preventDefault();
        closeMobileMenu();
        scrollTo(event.target.dataset.href);
    }, [closeMobileMenu])
    
    return (
        <ul className={"menu "+ className}>
            <li><a onKeyDown={onKeyDown} className={"menu__link " + (visibleSection === "portfolio" ? "menu__link-active" : "")} data-href="#portfolio" href="/#portfolio" onClick={scrollToSection}>Портфолио</a></li>
            <li><a onKeyDown={onKeyDown} className={"menu__link " + (visibleSection === "why-us" ? "menu__link-active" : "")} data-href="#why-us" href="/#why-us" onClick={scrollToSection}>Почему мы</a></li>
            <li><a onKeyDown={onKeyDown} className={"menu__link " + (visibleSection === "partnership" ? "menu__link-active" : "")} data-href="#partnership" href="/#partnership" onClick={scrollToSection}>Сотрудничество</a></li>
            <li><a onKeyDown={onKeyDown} className={"menu__link " + (visibleSection === "contacts" ? "menu__link-active" : "")} data-href="#contacts" href="/#contacts" onClick={scrollToSection}>Контакты</a></li>
        </ul>
    )
}

export const Header = ({ className, openContacts, visibleSection }) => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    const openMobileMenu = useCallback(() => {
        setMobileMenuIsOpen(true);
    }, [])

    const closeMobileMenu = useCallback(() => {
        setMobileMenuIsOpen(false);
    }, [])

    const openBrief = useCallback(() => {
        window.open(BRIEF_LINK, "_blank");
    }, [])
    
    const openContactsAndCloseMenu = useCallback(() => {
        closeMobileMenu();
        openContacts();
    }, [openContacts, closeMobileMenu])

    return (
        <>
        <MobileMenu openContactsAndCloseMenu={openContactsAndCloseMenu} openBrief={openBrief} isOpen={mobileMenuIsOpen} closeMobileMenu={closeMobileMenu} visibleSection={visibleSection} />
        <header className={"header " + className}>
            <div>
                <Logo className="header__logo" />
                <ul className="header__links">
                    <li><a href={SOCIALS.email.href} className="header__link">{SOCIALS.email.title}</a></li>
                    <li><button onClick={openContacts} className="header__link">Связаться с нами</button></li>
                </ul>
            </div>
            <div>
                <nav>
                    <Menu className="header__menu" visibleSection={visibleSection} closeMobileMenu={closeMobileMenu}/>
                </nav>
                <button className="header__openMobileMenuButton" onClick={openMobileMenu}>Меню</button>
                <Button className="header__briefButton" onClick={openBrief} size="small">Заполнить бриф</Button>
            </div>
        </header>
        </>
    )
}