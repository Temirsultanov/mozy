import React from "react";
import "./style.scss";

import appStoreImage from "../../../images/appstore.png";
import playMarketImage from "../../../images/playmarket.png";

const StoreLink = ({ isIOS = true, href }) => {
    if (isIOS) {
        return (
            <li>
                <a className="storeLink storeLink-ios" href={href} target="_blank" rel="noreferrer">
                    <img alt="Логотип AppStore" className="appStoreImage" src={appStoreImage} />
                    App Store
                </a>
            </li>
        )
    }

    return (
        <li>
            <a className="storeLink storeLink-android" href={href} target="_blank" rel="noreferrer">
                <img alt="Логотип playMarket" className="playMarketImage" src={playMarketImage} />
                Play Market
            </a>
        </li>
    )
}

export const StoreLinks = ({ className, appStoreLink, playMarketLink }) => {
    return (
        <ul className={className + " storeLinks"}>
            {appStoreLink ? <StoreLink href={appStoreLink} /> : null}
            {playMarketLink ? <StoreLink isIOS={false} href={playMarketLink} /> : null}
        </ul>
    )
}

