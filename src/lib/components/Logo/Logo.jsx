import React from "react";

export const Logo = ({ className }) => {
    return (
        <svg className={className} width="111" height="38" viewBox="0 0 111 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.88022 37.3749C4.81328 37.3749 4.77981 37.3682 4.77981 37.3548H4.73964L0.200832 34.7038C0.120499 34.6503 0.0736385 34.5766 0.0602497 34.4829L0 9.2182C0.0133888 9.12448 0.0602494 9.05084 0.140582 8.99729C10.5169 2.9991 15.7319 0 15.7854 0C15.8256 0 16.6222 0.448526 18.1753 1.34558L20.4849 2.69115V2.71124H20.505V2.73132H20.5251L20.5451 2.77149L20.5853 2.89198L20.6456 28.1567C20.6456 28.2638 20.6054 28.3441 20.5251 28.3977C18.7711 29.4018 17.8808 29.9106 17.854 29.924C17.8406 29.924 17.8205 29.924 17.7937 29.924L17.6933 29.9039L14.1788 27.8554L14.1988 31.8922C14.1855 31.9859 14.1386 32.0595 14.0583 32.1131C12.3043 33.1306 11.414 33.6461 11.3872 33.6595C11.3738 33.6595 11.3537 33.6595 11.3269 33.6595C11.3002 33.6595 11.2734 33.6595 11.2466 33.6595C11.2332 33.6461 11.2198 33.6327 11.2064 33.6193L7.71196 31.5909L7.73204 35.6076C7.73204 35.7147 7.68518 35.795 7.59146 35.8486C5.83752 36.8661 4.93378 37.3749 4.88022 37.3749ZM4.59906 36.6318L4.51873 12.0299L0.542247 9.7002L0.62258 34.3222L4.59906 36.6318ZM4.79989 11.5479L19.7619 2.91207L15.7854 0.602497L0.823412 9.23829L4.79989 11.5479ZM11.0659 32.8963L11.0056 11.5679L7.67179 13.4959L7.71196 30.9683L11.0659 32.8963ZM17.5126 29.1809L17.4523 7.85254L14.1185 9.76045L14.1788 27.2329L17.5126 29.1809Z" fill="#FFE252"/>
            <path d="M34.985 37.3749C34.9314 37.3749 34.9047 37.3682 34.9047 37.3548H34.8645L30.3257 34.7038C30.2453 34.6503 30.1985 34.5766 30.1851 34.4829L30.1248 9.2182C30.1382 9.12448 30.1851 9.05084 30.2654 8.99729C40.6418 2.9991 45.8567 0 45.9103 0C45.9504 0 46.7404 0.448526 48.2801 1.34558L50.5897 2.69115H50.6097V2.71124H50.6298V2.73132H50.6499L50.67 2.77149V2.79157C50.6834 2.84512 50.6901 2.8719 50.6901 2.8719C50.7035 2.8719 50.7102 2.8786 50.7102 2.89198L50.7704 28.1567C50.7704 28.2638 50.7235 28.3441 50.6298 28.3977C40.2669 34.3825 35.0519 37.3749 34.985 37.3749ZM34.7239 36.6318L34.6436 12.0299L30.6671 9.7002L30.7474 34.3222L34.7239 36.6318ZM34.9247 11.5479L49.8867 2.91207L45.9103 0.602497L30.9483 9.23829L34.9247 11.5479ZM37.8368 26.9316L43.0986 23.879L43.0584 10.4433L37.7966 13.4959L37.8368 26.9316ZM37.8368 32.1733L47.3563 26.6705L43.3798 24.361L37.8368 27.5743V32.1733ZM47.6374 26.2086L47.5772 7.85254L43.6208 10.142L43.6609 23.879L47.6374 26.2086Z" fill="#FFE252"/>
            <path d="M65.1299 37.3749H65.0496L60.4706 34.7038C60.3769 34.6503 60.33 34.5766 60.33 34.4829L60.3099 31.4905L60.33 31.4704V31.4102L68.9056 12.9336L65.1299 15.1026H64.9893C64.9893 15.0892 64.9826 15.0825 64.9692 15.0825L64.9291 15.0624L60.3903 12.4315C60.3099 12.378 60.2698 12.2976 60.2698 12.1905L60.2497 9.19812C60.2631 9.1044 60.3099 9.03745 60.3903 8.99729C70.7666 2.9991 75.9815 0 76.0351 0C76.0887 0 76.8786 0.448526 78.4049 1.34558C79.9446 2.22924 80.7212 2.67776 80.7346 2.69115L80.7747 2.73132C80.7747 2.74471 80.7814 2.7514 80.7948 2.7514L80.835 2.85182L80.8551 4.39823C80.8551 5.42917 80.8417 5.95802 80.8149 5.9848L72.2595 24.4614C74.7632 23.002 76.0418 22.2723 76.0954 22.2723C76.1489 22.2723 76.9455 22.7208 78.4853 23.6179L80.8149 24.9835L80.835 25.0036C80.835 25.017 80.8417 25.0237 80.8551 25.0237L80.8752 25.0639L80.8953 25.1844L80.9153 28.1567C80.9153 28.2504 80.8685 28.324 80.7747 28.3776C70.3984 34.3758 65.1835 37.3749 65.1299 37.3749ZM68.9256 31.611L80.0919 25.1844L76.0954 22.8547L71.8578 25.3049L68.9256 31.611ZM64.7885 14.3595V12.0098L60.812 9.7002V12.0299L64.7885 14.3595ZM65.0496 11.5479L80.0116 2.91207L76.0351 0.582413L61.0731 9.23829L65.0496 11.5479ZM64.8487 36.6318V34.2821L60.8723 31.9725V34.3222L64.8487 36.6318ZM64.9893 33.7398L76.7581 8.39479L69.729 12.4516L60.9526 31.3901L64.9893 33.7398Z" fill="#FFE252"/>
            <path d="M101.701 33.6394H101.641L101.581 33.6193V33.5992H101.561L97.0422 30.9683C96.9484 30.9148 96.9016 30.8344 96.9016 30.7273L96.8815 25.3049L95.3552 26.2086L95.2748 26.2287C95.1945 26.2287 95.1343 26.222 95.0941 26.2086H95.074V26.1885L90.5553 23.5576C90.4616 23.5041 90.4147 23.4304 90.4147 23.3367L90.3745 9.19812C90.3879 9.1044 90.4348 9.03076 90.5151 8.9772C92.2691 7.95965 93.1728 7.45088 93.2263 7.45088C93.2799 7.45088 94.0765 7.8994 95.6162 8.79645L97.9258 10.1621L97.966 10.1822V10.2023H97.9861L98.0062 10.2424L98.0262 10.3228L98.0463 15.7854L103.328 12.7328L103.288 1.72716H103.308V1.68699C103.308 1.66021 103.315 1.64013 103.328 1.62674C103.342 1.59996 103.355 1.57988 103.368 1.56649C103.395 1.5531 103.857 1.29202 104.754 0.783246C105.651 0.261082 106.12 0 106.16 0C106.2 0 106.99 0.448526 108.53 1.34558C110.069 2.22924 110.839 2.67776 110.839 2.69115L110.88 2.71124V2.73132H110.9L110.92 2.77149L110.94 2.85182L110.96 2.89198L111 17.0105C111 17.1176 110.953 17.1979 110.859 17.2515L104.533 20.8866L104.573 31.8721C104.56 31.9792 104.513 32.0595 104.433 32.1131C102.665 33.1306 101.755 33.6394 101.701 33.6394ZM108.088 4.0769L110.136 2.89198L106.16 0.582413L104.111 1.76732L108.088 4.0769ZM107.847 15.0624L107.827 4.55889L103.85 2.22924L103.87 12.7328L107.847 15.0624ZM98.0664 21.0271L107.586 15.5243L103.609 13.2148L98.0463 16.4281L98.0664 21.0271ZM94.9334 25.4856L94.8933 12.0098L90.9168 9.7002L90.9569 23.176L94.9334 25.4856ZM95.1744 11.5479L97.2229 10.3629L93.2263 8.05337L91.198 9.2182L95.1744 11.5479ZM101.44 32.8963L101.4 22.694L97.4438 25.0036V30.5868L101.44 32.8963Z" fill="#FFE252"/>
        </svg>
    )
}