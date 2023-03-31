import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./style.scss"

export const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__copyright">© 2023 «Mozy»</p>
            <div className="footer__logoWrapper">
                <StaticImage className="footer__logo" src="../../../images/logo.png" alt="Логотип Mozy"/>
            </div>
            <a className="footer__policy" href="/policy" target="_blank" rel="noreferrer">Политика конфиденциальности</a>
        </footer>
    )
}