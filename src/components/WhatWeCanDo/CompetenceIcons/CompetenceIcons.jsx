import React from "react";

const IconMobile = () => {
    return (
        <svg className="competence__icon" width="69" height="68" viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69 0H9V60H69V0Z" fill="#D97B37"/>
            <path opacity="0.5" d="M60 8H0V68H60V8Z" fill="#D97B37"/>
            <path d="M38.5 51C50.3741 51 60 41.3741 60 29.5C60 17.6259 50.3741 8 38.5 8C26.6259 8 17 17.6259 17 29.5C17 41.3741 26.6259 51 38.5 51Z" fill="white"/>
        </svg>
    )
}

const IconWeb = () => {
    return (
        <svg className="competence__icon" width="57" height="67" viewBox="0 0 57 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.57422 0L13.5742 61.5L27.0742 47L36.0742 60L46.0742 54L37.5742 41L56.0742 34L4.57422 0Z" fill="#4768BE"/>
            <path opacity="0.5" d="M0 4.90527L9 66.4053L22.5 51.9053L31.5 64.9053L41.5 58.9053L33 45.9053L51.5 38.9053L0 4.90527Z" fill="#4768BE"/>
        </svg>
    )
}

const IconDesktop = () => {
    return (
        <svg className="competence__icon" width="79" height="78" viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4286 5.14286L5.14286 15.4286V5.14286H15.4286ZM0 0V20.5714H20.5714V0H0ZM41.1429 12.8571V23.1429L30.8571 12.8571H41.1429ZM25.7143 7.71429V28.2857H46.2857V7.71429H25.7143ZM15.4286 36V46.2857H5.14286L15.4286 36ZM0 30.8571V51.4286H20.5714V30.8571H0Z" fill="#254F59"/>
            <path opacity="0.5" d="M57.8571 26V41.4286H42.4286V56.8571H27V77.4286H78.4286V26H57.8571Z" fill="#254F59"/>
            <path d="M51.4275 20.5713V35.9999H35.9989V51.4284H20.5703V71.9999H71.9989V20.5713H51.4275ZM66.856 66.857H56.5703V56.5713H66.856V66.857Z" fill="#254F59"/>
        </svg>
    )
}

const IconDesign = () => {
    return (
        <svg className="competence__icon" width="89" height="57" viewBox="0 0 89 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M0 31.7297C13.7187 12.3135 50.7249 -14.8693 89 31.7297C75.1098 50.7993 37.8636 77.497 0 31.7297Z" fill="#9356C4"/>
            <path d="M0 25.7297C13.7187 6.3135 50.7249 -20.8693 89 25.7297C75.1098 44.7993 37.8636 71.497 0 25.7297Z" fill="#9356C4"/>
            <path d="M44.5 40C52.5081 40 59 33.5081 59 25.5C59 17.4919 52.5081 11 44.5 11C36.4919 11 30 17.4919 30 25.5C30 33.5081 36.4919 40 44.5 40Z" fill="white"/>
            <path d="M44.5 33C48.6421 33 52 29.6421 52 25.5C52 21.3579 48.6421 18 44.5 18C40.3579 18 37 21.3579 37 25.5C37 29.6421 40.3579 33 44.5 33Z" fill="#9356C4"/>
        </svg>
    )
}

export const competenceIcons = {
    "mobile": <IconMobile></IconMobile>,
    "web": <IconWeb></IconWeb>,
    "desktop": <IconDesktop></IconDesktop>,
    "design": <IconDesign></IconDesign>
}