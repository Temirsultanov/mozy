import React from "react"
import "./style.scss"

export const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__copyright">© 2023 «Mozy»</p>
            <a className="footer__policy" href="/policy" target="_blank" rel="noreferrer">Политика конфиденциальности</a>
        </footer>
    )
}