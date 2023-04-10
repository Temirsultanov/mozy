import React, { useEffect, useLayoutEffect, useState, useMemo, useRef, useCallback } from "react";
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

const MOBILE_WIDTH = 700;
const DELAY_BETWEEN_SLIDES = 1500;
const TIME_TO_CHANGE_CLASSES = 500;
const OPEN_ANIMATION_TIME = 1000;
const SECTIONS_LENGTH = 6;

const sections = {
  promoBlock: 0,
  whatWeCanDo: 1,
  whyUs: 2,
  portfolio: 3,
  faq: 4,
  contactsAndFooter: 5,
};
const sectionsId = {
  "home": 0,
  "services": 1,
  "why-us": 2,
  "projects": 3,
  "faq": 4,
  "contacts-us": 5,
};
const contactsPopupId = "contacts-us-modal"

function isScrollDown(event) {
  return event.deltaY > 0;
}

function isScrollUp(event) {
  return event.deltaY < 0;
}

function isMobile(screenWidth) {
  return screenWidth < MOBILE_WIDTH
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

function removeTransitionToSections() {
  document.querySelectorAll("#home, #services, #why-us, #projects, #faq, #contacts-us").forEach(section => {
    section.classList.add("noTransition");
  })
}

function addTransitionToSections() {
  document.querySelectorAll("#home, #services, #why-us, #projects, #faq, #contacts-us").forEach(section => {
    section.classList.remove("noTransition");
  })
}

function setHashToUrl(id) {
  window.history.replaceState(null, null, "#" + id);
}

const incrementSection = (cur) => {
  if (cur < sections.contactsAndFooter) return cur + 1;
  return cur;
}

const decrementSection = (cur) => {
  if (cur > sections.promoBlock) return cur - 1;
  return cur;
}

const observerOptions = { rootMargin: "0px", threshold: 0.1 }
const observerCallback = (entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    if (entry.isIntersecting && (id in sectionsId)) {
      setHashToUrl(id);
    }
  })
}

const IndexPage = ({ location }) => {
  const [openedSection, setOpenedSection] = useState(null);
  const [closedSection, setClosedSection] = useState(null);
  const [contactsPopupClosed, setContactsPopupClosed] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  
  const promoBlockRef = useRef(null);
  const whatWeCanDoRef = useRef(null);
  const whyUsRef = useRef(null);
  const portfolioRef = useRef(null);
  const faqRef = useRef(null);
  const contactsAndFooterRef = useRef(null);
  const contactsPopupRef = useRef(null);

  const observer = useRef(null);
  const observe = useCallback(() => {
    if (observer.current === null) return;
    
    observer.current.observe(promoBlockRef.current);
    observer.current.observe(whatWeCanDoRef.current);
    observer.current.observe(whyUsRef.current);
    observer.current.observe(portfolioRef.current);
    observer.current.observe(faqRef.current);
    observer.current.observe(contactsAndFooterRef.current);
  }, []);

  const disconnectObserver = useCallback(() => {
    if (observer.current === null) return;
    observer.current.disconnect();
  }, []);

  const openContacts = useCallback(() => {
    disconnectObserver();
    closeScrollToBody();
    setHashToUrl(contactsPopupId);
    setContactsPopupClosed(false);
  }, [disconnectObserver])

  const closeContacts = useCallback(() => {
    openScrollToBody()
    setContactsPopupClosed(true);
    observe();
  }, [observe])

  const openPortfolio = useCallback(() => {
    if (isMobile(window.innerWidth)) {
      scrollById("projects");
      return;
    }
    
    setOpenedSection(sections.portfolio);

    setScrolling(true);
    setTimeout(() => {
      setScrolling(false);
    }, DELAY_BETWEEN_SLIDES - TIME_TO_CHANGE_CLASSES);
  }, [])
  
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

  const onMouseWheel = useCallback(throttle((event) => {
    if (scrolling === true) return;
    if (contactsPopupClosed === false) return;
    if (isMobile(window.innerWidth)) return;

    if (isScrollDown(event)) setOpenedSection(incrementSection);
    else if (isScrollUp(event)) setOpenedSection(decrementSection);

  }, DELAY_BETWEEN_SLIDES), [contactsPopupClosed, scrolling]);

  const openSectionByHash = useCallback((hash) => {
    removeTransitionToSections();
    if (hash === contactsPopupId) openContacts();
    else if (hash in sectionsId) setOpenedSection(sectionsId[hash]);
    addTransitionToSections();
  }, [openContacts])

  useEffect(() => {
    window.addEventListener("wheel", onMouseWheel);
    return () => window.removeEventListener("wheel", onMouseWheel);
  }, [onMouseWheel]);

  useEffect(() => {
    const hash = location.hash.slice(1);
    openSectionByHash(hash);

    observer.current = new IntersectionObserver(observerCallback, observerOptions);
    if (hash !== contactsPopupId) setTimeout(observe, OPEN_ANIMATION_TIME);

    return disconnectObserver;
  }, [location, observe, disconnectObserver, openSectionByHash])

  useLayoutEffect(() => {
    setTimeout(() => setClosedSection(openedSection), DELAY_BETWEEN_SLIDES - TIME_TO_CHANGE_CLASSES);
  }, [openedSection]);

  return (
    <Layout>
      <ContactsPopup ref={contactsPopupRef} isClose={contactsPopupClosed} close={closeContacts} />
      <PromoBlock
        ref={promoBlockRef}
        openPortfolio={openPortfolio}
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
