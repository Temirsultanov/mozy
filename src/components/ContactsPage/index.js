import * as React from "react";

import {contacts, contactsHidden, contacts__wrapper, socialMedia, content, title, subtitle, form, input as inputStyle, inputWrapper, inputMessageWrapper, submitButtonWrapper, title__outer, title__inner, subtitle__inner, socialMediaLink as socialMediaLinkStyle, closeButton as closeButtonStyle} from "./style.module.scss"; // похоже на плохой код

import SocialMediaLink from "../SocialMediaLink/index.js";
import Input from "../Input/index.js";
import SubmitButton from "../SubmitButton/index.js";
import CloseButton from "../CloseButton/index.js"

const links = [
    {
        href: "#",
        icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.349 2.8276C27.3779 2.71189 27.4294 2.60306 27.5007 2.50744C27.572 2.41182 27.6615 2.3313 27.7641 2.27056C27.8668 2.20982 27.9804 2.17007 28.0985 2.15362C28.2167 2.13716 28.3369 2.14433 28.4522 2.17471C31.6548 3.04214 34.5745 4.73307 36.9206 7.07925C39.2668 9.42544 40.9578 12.3451 41.8252 15.5477C41.8556 15.663 41.8627 15.7832 41.8463 15.9013C41.8298 16.0195 41.7901 16.1331 41.7293 16.2358C41.6686 16.3384 41.5881 16.4279 41.4925 16.4992C41.3968 16.5704 41.288 16.622 41.1723 16.6509L40.9472 16.6959C40.7474 16.6935 40.5539 16.6263 40.3956 16.5045C40.2373 16.3828 40.1227 16.2129 40.0691 16.0205C39.287 13.1242 37.7591 10.4836 35.6377 8.3622C33.5163 6.24083 30.8757 4.71286 27.9794 3.93076C27.8641 3.90221 27.7558 3.85056 27.661 3.77894C27.5663 3.70733 27.487 3.61723 27.4281 3.5141C27.3692 3.41097 27.3318 3.29695 27.3182 3.17896C27.3046 3.06096 27.3151 2.94143 27.349 2.8276ZM26.1108 10.8874C27.7895 11.3377 29.3202 12.2217 30.5492 13.4507C31.7782 14.6796 32.6622 16.2104 33.1125 17.8891C33.166 18.0815 33.2806 18.2514 33.4389 18.3732C33.5972 18.4949 33.7908 18.5621 33.9905 18.5645L34.2156 18.5195C34.3309 18.4909 34.4392 18.4393 34.534 18.3677C34.6288 18.296 34.708 18.2059 34.7669 18.1028C34.8259 17.9997 34.8633 17.8857 34.8769 17.7677C34.8904 17.6497 34.8799 17.5301 34.846 17.4163C34.3215 15.432 33.2806 13.622 31.8292 12.1707C30.3779 10.7193 28.5679 9.67841 26.5836 9.15388C26.4697 9.11994 26.3502 9.10945 26.2322 9.12304C26.1142 9.13664 26.0002 9.17403 25.8971 9.23296C25.7939 9.29189 25.7038 9.37114 25.6322 9.46589C25.5606 9.56065 25.509 9.66896 25.4804 9.78426C25.4183 10.0141 25.4498 10.2592 25.5679 10.466C25.686 10.6727 25.8812 10.8242 26.1108 10.8874ZM43.5587 33.3558C43.1926 36.1792 41.8121 38.773 39.6747 40.6536C37.5372 42.5342 34.7888 43.5733 31.9418 43.5769C14.5614 43.5769 0.422943 29.4385 0.422943 12.0581C0.426626 9.21113 1.46565 6.46266 3.34626 4.32522C5.22688 2.18778 7.8207 0.80729 10.6441 0.441173C11.225 0.37346 11.8123 0.494517 12.3191 0.78644C12.8259 1.07836 13.2253 1.52565 13.4582 2.06214L17.9834 12.621C18.1586 13.0307 18.2297 13.4774 18.1905 13.9212C18.1512 14.3651 18.0027 14.7924 17.7583 15.165L14.0211 20.8834C13.9335 21.0108 13.8811 21.1591 13.8693 21.3133C13.8574 21.4675 13.8865 21.6221 13.9535 21.7614C15.728 25.4016 18.6788 28.3366 22.3285 30.0914C22.4638 30.1588 22.6149 30.1882 22.7657 30.1763C22.9164 30.1644 23.061 30.1117 23.184 30.0238L28.8349 26.2641C29.2074 26.0103 29.6378 25.8545 30.0864 25.8112C30.5351 25.7679 30.9874 25.8385 31.4015 26.0165L41.9377 30.5417C42.4742 30.7746 42.9215 31.174 43.2134 31.6808C43.5054 32.1876 43.6264 32.7749 43.5587 33.3558ZM41.2173 32.2077L30.681 27.6824C30.5441 27.6216 30.3941 27.596 30.2447 27.6078C30.0953 27.6196 29.9512 27.6684 29.8255 27.75L24.1971 31.5097C23.8105 31.7723 23.3619 31.9292 22.8958 31.9647C22.4298 32.0002 21.9626 31.9132 21.5406 31.7124C17.5348 29.771 14.2935 26.5456 12.3326 22.5494C12.1327 22.1282 12.0444 21.6627 12.0759 21.1976C12.1075 20.7324 12.2578 20.2832 12.5127 19.8928L16.2499 14.1744C16.3334 14.0495 16.3835 13.9052 16.3953 13.7554C16.4071 13.6056 16.3803 13.4553 16.3174 13.3189L11.7922 2.78257C11.7291 2.61835 11.6181 2.47689 11.4735 2.37653C11.329 2.27617 11.1577 2.22155 10.9818 2.21974H10.8692C8.47965 2.5312 6.28494 3.70109 4.6943 5.51128C3.10366 7.32146 2.22566 9.64836 2.22402 12.0581C2.22998 19.9379 5.36287 27.4933 10.9347 33.0652C16.5066 38.637 24.062 41.7699 31.9418 41.7759C34.3515 41.7742 36.6784 40.8962 38.4886 39.3056C40.2988 37.7149 41.4687 35.5202 41.7802 33.1307C41.7989 32.9367 41.7542 32.7418 41.6527 32.5753C41.5512 32.4089 41.3984 32.2799 41.2173 32.2077Z" fill="#FDAA5A"/></svg>
    },
    {
        href: "#",
        icon: <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.8323 1.34289C44.4721 1.01974 44.0338 0.804678 43.5646 0.720816C43.0955 0.636955 42.6132 0.687467 42.1696 0.866922L1.90059 17.299C1.37726 17.5152 0.935 17.9009 0.639408 18.3987C0.343815 18.8966 0.210641 19.4801 0.259645 20.0627C0.308648 20.6454 0.537217 21.1961 0.911443 21.6332C1.28567 22.0703 1.78561 22.3705 2.33711 22.4893L13.2719 24.7784V38.7853C13.2653 39.3249 13.416 39.854 13.7043 40.303C13.9925 40.752 14.4049 41.1 14.8871 41.3012C15.2135 41.436 15.5616 41.5053 15.9129 41.5051C16.2538 41.5055 16.5915 41.4356 16.9062 41.2994C17.2209 41.1632 17.5065 40.9635 17.7463 40.7119L23.9885 34.2297L33.1991 42.6384C33.6711 43.0821 34.2867 43.3249 34.9233 43.3183C35.1978 43.3176 35.4703 43.2717 35.7309 43.1823C36.16 43.0361 36.5459 42.7781 36.8516 42.4329C37.1572 42.0876 37.3726 41.6668 37.477 41.2105L45.6836 3.99468C45.791 3.51415 45.7683 3.01211 45.6181 2.54411C45.4679 2.07611 45.1959 1.66038 44.8323 1.34289ZM1.98789 19.9055C1.96193 19.709 2.00204 19.5093 2.10145 19.34C2.20086 19.1707 2.35348 19.0422 2.53354 18.9762L39.4631 3.92669L13.9485 23.0559L2.68633 20.7214C2.49874 20.6862 2.32795 20.5867 2.20132 20.4388C2.07468 20.2908 1.99952 20.103 1.98789 19.9055ZM16.5022 39.42C16.3836 39.5479 16.2306 39.6359 16.0632 39.6722C15.8958 39.7086 15.7217 39.6918 15.5637 39.624C15.4027 39.5563 15.2649 39.4405 15.1677 39.2911C15.0705 39.1417 15.0184 38.9656 15.018 38.7853V26.025L22.6789 33.0285L16.5022 39.42ZM43.9811 3.60938L35.7746 40.8025C35.7418 40.9568 35.6699 41.0991 35.5663 41.2147C35.4626 41.3303 35.3311 41.4149 35.1852 41.4598C35.0444 41.5124 34.8923 41.5232 34.7458 41.4912C34.5993 41.4592 34.4643 41.3856 34.3559 41.2785L15.5418 24.0985L43.8502 2.86144C43.9215 2.96947 43.9701 3.09196 43.9927 3.22086C44.0152 3.34977 44.0113 3.48217 43.9811 3.60938Z" fill="#FDAA5A"/></svg>
    },
    {
        href: "#",
        icon: <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.0185 0.709717H0.98146C0.760241 0.709717 0.548083 0.805593 0.391658 0.976253C0.235233 1.14691 0.147354 1.37838 0.147354 1.61973V32.5601C0.147354 33.2841 0.41099 33.9785 0.880266 34.4905C1.34954 35.0025 1.98602 35.2901 2.64967 35.2901H39.3503C40.014 35.2901 40.6505 35.0025 41.1197 34.4905C41.589 33.9785 41.8526 33.2841 41.8526 32.5601V1.61973C41.8526 1.37838 41.7648 1.14691 41.6083 0.976253C41.4519 0.805593 41.2398 0.709717 41.0185 0.709717ZM38.8707 2.52974L21 20.4114L3.12928 2.52974H38.8707ZM39.3503 33.4701H2.64967C2.42845 33.4701 2.21629 33.3742 2.05987 33.2035C1.90344 33.0329 1.81557 32.8014 1.81557 32.5601V3.69L20.437 22.2997C20.5884 22.4582 20.7901 22.5467 21 22.5467C21.2099 22.5467 21.4116 22.4582 21.563 22.2997L40.1844 3.69V32.5601C40.1844 32.8014 40.0965 33.0329 39.9401 33.2035C39.7837 33.3742 39.5715 33.4701 39.3503 33.4701Z" fill="#FDAA5A"/></svg>
    },
    {
        href: "#",
        icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0033 0.83252C19.1226 0.832104 15.3099 1.85039 11.9462 3.78556C8.58252 5.72073 5.78579 8.50499 3.83561 11.86C1.88544 15.2149 0.850158 19.023 0.833279 22.9036C0.816399 26.7841 1.81851 30.6011 3.73942 33.9729L1.74432 40.9778C1.61644 41.4327 1.61201 41.9134 1.7315 42.3705C1.85098 42.8276 2.09007 43.2447 2.42417 43.5788C2.75827 43.9129 3.17533 44.152 3.63246 44.2715C4.0896 44.3909 4.5703 44.3865 5.02516 44.2586L12.0302 42.2635C14.98 43.9432 18.2762 44.9229 21.6645 45.1273C25.0528 45.3316 28.4429 44.7551 31.5732 43.4422C34.7035 42.1293 37.4905 40.1151 39.7192 37.5548C41.948 34.9946 43.559 31.9566 44.4281 28.6753C45.2971 25.394 45.401 21.957 44.7317 18.6292C44.0624 15.3013 42.6378 12.1717 40.5677 9.48149C38.4976 6.7913 35.8374 4.61243 32.7921 3.11288C29.7468 1.61333 26.3978 0.833158 23.0033 0.83252ZM23.0033 43.3941C19.3353 43.4026 15.7341 42.4142 12.5844 40.5345C12.4469 40.4645 12.2953 40.4266 12.141 40.4237H11.8972L4.53747 42.5296C4.38708 42.5699 4.22872 42.57 4.07832 42.5297C3.92791 42.4894 3.79076 42.4102 3.68066 42.3001C3.57056 42.19 3.49139 42.0529 3.45112 41.9025C3.41085 41.7521 3.41089 41.5937 3.45124 41.4434L5.55719 34.0837C5.61953 33.852 5.58766 33.6049 5.46852 33.3966C3.17457 29.5254 2.22535 25.0042 2.76872 20.5374C3.31209 16.0705 5.31754 11.9088 8.47267 8.70041C11.6278 5.49206 15.7555 3.41726 20.2127 2.79921C24.6699 2.18116 29.2063 3.05455 33.1154 5.28334C37.0245 7.51213 40.0867 10.9712 41.8251 15.1216C43.5634 19.2721 43.8802 23.881 42.7262 28.2303C41.5722 32.5795 39.0121 36.4251 35.4447 39.1678C31.8774 41.9105 27.5031 43.3964 23.0033 43.3941ZM34.198 27.101L29.6758 24.5296C29.2634 24.2934 28.7957 24.1709 28.3205 24.1748C27.8453 24.1787 27.3797 24.3088 26.9713 24.5517L23.9121 26.3916C22.0694 25.4359 20.5673 23.9338 19.6116 22.0911L21.4515 19.032C21.6944 18.6236 21.8245 18.158 21.8284 17.6828C21.8323 17.2076 21.7099 16.7399 21.4737 16.3276L18.9022 11.8054C18.6887 11.4356 18.3818 11.1283 18.0122 10.9144C17.6426 10.7004 17.2233 10.5872 16.7963 10.5862C14.9187 10.5862 13.1178 11.3305 11.7881 12.656C10.4584 13.9816 9.70844 15.7801 9.70257 17.6576C9.69966 20.1048 10.1792 22.5286 11.1136 24.7903C12.0481 27.052 13.4193 29.1073 15.1487 30.8388C16.8781 32.5702 18.9318 33.9438 21.1925 34.881C23.4531 35.8181 25.8763 36.3005 28.3235 36.3005H28.3457C30.2232 36.2946 32.0218 35.5447 33.3474 34.215C34.6729 32.8853 35.4172 31.0844 35.4172 29.2069C35.4162 28.7799 35.3031 28.3606 35.0891 27.991C34.8751 27.6214 34.5678 27.3145 34.198 27.101ZM28.3457 34.5271H28.3235C23.8533 34.5212 19.5681 32.7413 16.4092 29.5783C13.2503 26.4153 11.476 22.1279 11.476 17.6576C11.4819 16.2505 12.045 14.903 13.0421 13.91C14.0392 12.9171 15.3891 12.3596 16.7963 12.3596C16.9098 12.3612 17.0208 12.3928 17.1182 12.4512C17.2155 12.5096 17.2957 12.5927 17.3505 12.6921L19.9441 17.2143C20.0198 17.3538 20.0594 17.51 20.0594 17.6687C20.0594 17.8274 20.0198 17.9836 19.9441 18.1232L17.8603 21.5813C17.7836 21.7029 17.7392 21.842 17.7314 21.9856C17.7236 22.1292 17.7528 22.2724 17.816 22.4015C18.9705 24.9739 21.0294 27.0327 23.6018 28.1872C23.7309 28.2504 23.8741 28.2795 24.0177 28.2718C24.1612 28.264 24.3004 28.2196 24.422 28.1429L27.8802 26.0591C28.0197 25.9835 28.1759 25.9438 28.3346 25.9438C28.4933 25.9438 28.6495 25.9835 28.7891 26.0591L33.3113 28.6527C33.4107 28.7075 33.4939 28.7876 33.5523 28.885C33.6107 28.9823 33.6423 29.0934 33.6438 29.2069C33.6438 30.6141 33.0863 31.9639 32.0934 32.961C31.1004 33.9581 29.7529 34.5212 28.3457 34.5271Z" fill="#FDAA5A"/></svg>
    },
]

const ContactsPage = ({isContactsHidden, setContactsHiddenState}) => {
    let contactsClassName;
    if (isContactsHidden) {
        contactsClassName = `${contacts} ${contactsHidden}`
    } else {
        contactsClassName = `${contacts}`;
    }
    return (
        <section className={contactsClassName} >
            <div className={contacts__wrapper}>
                <CloseButton className={closeButtonStyle} setContactsHiddenState={setContactsHiddenState}></CloseButton>
                <div className={content}>
                    <h2 className={title}>
                        <span className={title__outer}>
                            <span className={title__inner}>Мы готовы</span>
                        </span>
                        <span className={title__outer}>
                            <span className={title__inner}>к вашим идеям</span>
                        </span>
                    </h2>
                    <p className={subtitle}><span className={subtitle__inner}>Свяжитесь с&nbsp;нами</span></p>
                    <form action="#" method="POST" className={form}>
                        <div className={inputWrapper}>
                            <Input className={inputStyle} name="firstname" type="text" placeholder="Ваше имя"/>
                        </div>
                        <div className={inputWrapper}>
                            <Input className={inputStyle} name="phone" type="tel" placeholder="Телефон"/>
                        </div>
                        <div className={inputWrapper}>
                            <Input className={inputStyle} name="email" type="email" placeholder="Email"/>                        
                        </div>
                        <div className={inputMessageWrapper}>
                            <Input className={inputStyle} isTextArea={true} name="message" placeholder="Опишите ваш проект"/>                    
                        </div>
                        <div className={submitButtonWrapper}>
                            <SubmitButton className={inputStyle}>Связаться с нами</SubmitButton>
                        </div>
                    </form>
                </div>
                <ul className={socialMedia}>
                    {links.map((link, index) => {
                        return (
                            <div className={socialMediaLinkStyle} key={index}>
                                <SocialMediaLink href={link.href}>
                                    {link.icon} 
                                </SocialMediaLink>
                            </div>
                        )
                    })}
                </ul>
            </div>            
        </section>
    )
}

export default ContactsPage;