import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./style.scss"

const StoreLink = ({ isIOS = true, href }) => {
    if (isIOS) {
        return (
            <li><a className="storeLink storeLink-ios" href={href} target="_blank" rel="noreferrer">
                <StaticImage alt="Логотип AppStore" className="appStoreImage" src="../../../images/appstore.png"/>
            </a></li>
        )
    } 
    
    return (
        <li><a className="storeLink storeLink-android" href={href} target="_blank" rel="noreferrer">
            <StaticImage alt="Логотип playMarket" className="playMarketImage" src="../../../images/playmarket.png"/>
        </a></li>
    )
}

export const StoreLinks = ({ className, appStoreLink, playMarketLink}) => {
    return (
        <ul className={className + " storeLinks"}>
            {appStoreLink ? <StoreLink href={appStoreLink} /> : null }
            {playMarketLink ? <StoreLink isIOS={false} href={playMarketLink} /> : null }
        </ul>
    )
}

