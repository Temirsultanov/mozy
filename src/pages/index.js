import React, { useEffect, useLayoutEffect, useState, useMemo, useRef} from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../styles/common.scss";

import { Layout } from "../components/Layout";
import { PromoBlock } from "../components/PromoBlock";
import { WhyUs } from "../components/WhyUs";
import { WhatWeCanDo } from "../components/WhatWeCanDo";
import { Portfolio } from "../components/Portfolio";
import { Faq } from "../components/Faq";
import { ContactsAndFooter } from "../components/ContactsAndFooter";
import { ContactsPopup } from "../components/ContactsPopup/ContactsPopup";
import { Seo } from "../components/seo";

import { BRIEF_LINK } from "../lib/constants";
import { throttle } from "../lib/utils";

const MOBILE_HEIGHT = 700;
const DELAY_BETWEEN_SLIDES = 1500;
const TIME_TO_CHANGE_CLASSES = 500;
const SECTIONS_LENGTH = 6;
const sections = {
  promoBlock: 0,
  whatWeCanDo: 1,
  whyUs: 2,
  portfolio: 3,
  faq: 4,
  contactsAndFooter: 5,
};
const ids = {
  "home": 0,
  "services": 1,
  "why-us": 2,
  "projects": 3,
  "faq": 4,
  "contacts-us": 5,
}

let scrolling = false;

function isScrollDown(event) {
  return event.deltaY > 0;
}

function isScrollUp(event) {
  return event.deltaY < 0;
}

function openBrief() {
  window.open(BRIEF_LINK, "_blank");
}

function scrollById(id) {
  scrollTo("#" + id);
}

function closeScrollToBody() {
  document.body.classList.add("hidden");
}

function openScrollToBody() {
  document.body.classList.remove("hidden");
}

const observerOptions = { rootMargin: "0px", threshold: 0.1 }
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === "home") {
        window.history.replaceState(null, null, "#home");
      } else if (entry.target.id === "services") {
        window.history.replaceState(null, null, "#services");
      } else if (entry.target.id === "why-us") {
        window.history.replaceState(null, null, "#why-us");
      } else if (entry.target.id === "projects") {
        window.history.replaceState(null, null, "#projects");
      } else if (entry.target.id === "faq") {
        window.history.replaceState(null, null, "#faq");
      } else if (entry.target.id === "contacts-us") {
        window.history.replaceState(null, null, "#contacts-us");
      }
    }
  })
}, observerOptions);

const IndexPage = ({ location }) => {
  const [openedSection, setOpenedSection] = useState(sections.promoBlock);
  const [closedSection, setClosedSection] = useState(sections.promoBlock);
  const [contactsPopupClosed, setContactsPopupClosed] = useState(true);
  
  const promoBlockRef = useRef(null);
  const whatWeCanDoRef = useRef(null);
  const whyUsRef = useRef(null);
  const portfolioRef = useRef(null);
  const faqRef = useRef(null);
  const contactsAndFooterRef = useRef(null);
  const contactsPopupRef = useRef(null);
  
  function observe() {
    observer.observe(promoBlockRef.current);
    observer.observe(whatWeCanDoRef.current);
    observer.observe(whyUsRef.current);
    observer.observe(portfolioRef.current);
    observer.observe(faqRef.current);
    observer.observe(contactsAndFooterRef.current);
  }
  
  const sectionsClassNames = useMemo(() => {
    const classNames = Array(SECTIONS_LENGTH).fill("");
    for (let i = 0; i < classNames.length; i++) {
      if (openedSection === i) {
        classNames[i] = "cur";
        continue;
      }

      if (closedSection === i) classNames[i] = "prev ";
      if (openedSection < i) classNames[i] = classNames[i] + "bottom";
      if (openedSection > i) classNames[i] = classNames[i] + "top";
    }
    return classNames;
  }, [openedSection, closedSection]);

  useEffect(() => {
    let onMouseWheel = function(event) {
      if (window.innerWidth < MOBILE_HEIGHT) return;
      if (contactsPopupClosed === false) return;
      if (scrolling === true) return;

      if (isScrollDown(event)) {
        setOpenedSection((cur) => {
          if (cur < sections.contactsAndFooter) return cur + 1;
          return cur;
        });
      } else if (isScrollUp(event)) {
        setOpenedSection((cur) => {
          if (cur > sections.promoBlock) return cur - 1;
          return cur;
        });
      }
    };

    const hash = location.hash.slice(1);
    if (hash === "contacts-us-modal")  {
      openContacts();
    } else if (hash in ids) {
      setOpenedSection(ids[hash]);
    }

    onMouseWheel = throttle(onMouseWheel, DELAY_BETWEEN_SLIDES);
    window.addEventListener("wheel", onMouseWheel);

    if (hash !== "contacts-us-modal") {
      setTimeout(() => {
        observe();
      }, 1000);
    }
    
    return () => {
      window.removeEventListener("wheel", onMouseWheel);
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      setClosedSection(openedSection);
    }, DELAY_BETWEEN_SLIDES - TIME_TO_CHANGE_CLASSES);
  }, [openedSection]);

  function openPortfolio() {
    if (window.innerWidth < MOBILE_HEIGHT) {
      scrollById("projects");
      return;
    }
    
    setOpenedSection(sections.portfolio);
    scrolling = true;
    setTimeout(() => {
      scrolling = false;
    }, DELAY_BETWEEN_SLIDES - TIME_TO_CHANGE_CLASSES);
    
  }

  function openContacts() {
    observer.disconnect();
    setContactsPopupClosed(false);
    window.history.replaceState(null, null, "#contacts-us-modal");
    closeScrollToBody();
  }

  function closeContacts() {
    setContactsPopupClosed(true);
    observe();
    openScrollToBody()
  }

  return (
    <Layout>
      <ContactsPopup ref={contactsPopupRef} isClose={contactsPopupClosed} close={closeContacts} />
      <PromoBlock
        ref={promoBlockRef}
        openPortfolio={openPortfolio}
        openBrief={openBrief}
        openContacts={openContacts}
        className={sectionsClassNames[sections.promoBlock]}
      />
      <WhatWeCanDo
        ref={whatWeCanDoRef}
        openContacts={openContacts}
        className={sectionsClassNames[sections.whatWeCanDo]}
      />
      <WhyUs ref={whyUsRef} openContacts={openContacts} className={sectionsClassNames[sections.whyUs]} />
      <Portfolio ref={portfolioRef} className={sectionsClassNames[sections.portfolio]} />
      <Faq ref={faqRef} className={sectionsClassNames[sections.faq]} />
      <ContactsAndFooter ref={contactsAndFooterRef} className={sectionsClassNames[sections.contactsAndFooter]} />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="ru" />
    <Seo></Seo>
  </>
);
