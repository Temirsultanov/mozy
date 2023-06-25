import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { StaticImage } from "gatsby-plugin-image";

import { SOCIALS, SOCIAL_ICONS } from "../../../lib/constants"
import { BRIEF_LINK } from "../../../lib/constants";
import { Button } from "../../../lib/components/Button";
import "./style.scss";

const MobileMenu = ({ isOpen, closeMobileMenu, visibleSection}) => {
    return (
        <div onClick={closeMobileMenu} className={"mobileMenu " + (isOpen && "mobileMenu-open")}>
            <div onClick={(e) => e.stopPropagation()} className="mobileMenu__inner">
                <button onClick={closeMobileMenu} className="mobileMenu__closeButton">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.641918" x2="22.5732" y2="-0.641918" transform="matrix(0.708797 -0.705413 0.708797 0.705413 1 16.9233)" stroke="white" strokeWidth="1.28384"/>
                        <line y1="-0.641918" x2="22.5732" y2="-0.641918" transform="matrix(0.708797 0.705413 -0.708797 0.705413 1 1.07666)" stroke="white" strokeWidth="1.28384"/>
                    </svg>
                </button>
                <nav>
                    <Menu visibleSection={visibleSection} />
                </nav>
                <ul className="mobileMenu__socialMedias">
                    <li><a href={SOCIALS.telegram.href}>{SOCIAL_ICONS.telegram}</a></li>
                    <li><a href={SOCIALS.whatsapp.href}>{SOCIAL_ICONS.whatsapp}</a></li>
                    <li><a href={SOCIALS.email.href}>{SOCIAL_ICONS.email}</a></li>
                    <li><a href={SOCIALS.phone.href}>{SOCIAL_ICONS.phone}</a></li>
                </ul>
                <Button>Заполнить бриф</Button>
                <Button className="mobileMenu__contactButton" category="secondary">Связаться с нами</Button>
            </div>
        </div>
    )
}

const Menu = ({ className, visibleSection}) => {
    function scrollToSection(event) {
        event.preventDefault();
        scrollTo(event.target.dataset.href);
    }
    
    return (
        <ul className={"menu "+ className}>
            <li><a onKeyDown={(e) => e.key === "Enter" ? scrollToSection(e) : ""} className={"menu__link " + (visibleSection === "portfolio" ? "menu__link-active" : "")} data-href="#portfolio" href="/#portfolio" onClick={scrollToSection}>Портфолио</a></li>
            <li><a onKeyDown={(e) => e.key === "Enter" ? scrollToSection(e) : ""} className={"menu__link " + (visibleSection === "why-us" ? "menu__link-active" : "")} data-href="#why-us" href="/#why-us" onClick={scrollToSection}>Почему мы</a></li>
            <li><a onKeyDown={(e) => e.key === "Enter" ? scrollToSection(e) : ""} className={"menu__link " + (visibleSection === "partnership" ? "menu__link-active" : "")} data-href="#partnership" href="/#partnership" onClick={scrollToSection}>Сотрудничество</a></li>
            <li><a onKeyDown={(e) => e.key === "Enter" ? scrollToSection(e) : ""} className={"menu__link " + (visibleSection === "contacts" ? "menu__link-active" : "")} data-href="#contacts" href="/#contacts" onClick={scrollToSection}>Контакты</a></li>
        </ul>
    )
}

export const Header = ({ className, openContacts, visibleSection }) => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    function openMobileMenu() {
        setMobileMenuIsOpen(true);
    }
    function closeMobileMenu() {
        setMobileMenuIsOpen(false);
    }
    function openBrief() {
        window.open(BRIEF_LINK, "_blank");
    }

    return (
        <>
        <MobileMenu isOpen={mobileMenuIsOpen} closeMobileMenu={closeMobileMenu} visibleSection={visibleSection} />
        <header className={"header " + className}>
            <div>
                <StaticImage className="header__logo" src="../../../images/logo.png" alt="Логотип Mozy"></StaticImage>
                <ul className="header__links">
                    <li><a href={SOCIALS.email.href} className="header__link">{SOCIALS.email.title}</a></li>
                    <li><button onClick={openContacts} className="header__link">Связаться с нами</button></li>
                </ul>
            </div>
            <div>
                <nav>
                    <Menu className="header__menu" visibleSection={visibleSection} />
                </nav>
                <button className="header__openMobileMenuButton" onClick={openMobileMenu}>Меню</button>
                <Button className="header__briefButton" onClick={openBrief} size="small">Заполнить бриф</Button>
            </div>
        </header>
        </>
    )
}