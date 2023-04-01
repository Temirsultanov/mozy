import React, { useEffect, useLayoutEffect, useState, useMemo, } from "react";
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
  scrollTo(id);
}

function closeScrollToBody() {
  document.body.classList.add("hidden");
}

function openScrollToBody() {
  document.body.classList.remove("hidden");
}

const IndexPage = () => {
  const [openedSection, setOpenedSection] = useState(sections.promoBlock);
  const [closedSection, setClosedSection] = useState(sections.promoBlock);
  const [contactsPopupClosed, setContactsPopupClosed] = useState(true);
  const [scrolling, setScrolling] = useState(false);

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
    let onMouseWheel = function (event) {
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
    onMouseWheel = throttle(onMouseWheel, DELAY_BETWEEN_SLIDES);

    window.addEventListener("wheel", onMouseWheel);
    return () => {
      window.removeEventListener("wheel", onMouseWheel);
    };
  }, [contactsPopupClosed, scrolling]);

  useLayoutEffect(() => {
    setTimeout(() => {
      setClosedSection(openedSection);
    }, DELAY_BETWEEN_SLIDES - TIME_TO_CHANGE_CLASSES);
  }, [openedSection]);

  function openPortfolio() {
    if (window.innerWidth < MOBILE_HEIGHT) {
      scrollById("portfolio");
      return;
    }
    
    setOpenedSection(sections.portfolio);
    setScrolling(true);
    setTimeout(() => {
      setScrolling(false);
    }, DELAY_BETWEEN_SLIDES - TIME_TO_CHANGE_CLASSES);
    
  }

  function openContacts() {
    setContactsPopupClosed(false);
    closeScrollToBody();
  }

  function closeContacts() {
    setContactsPopupClosed(true);
    openScrollToBody()
    
  }

  return (
    <Layout>
      <ContactsPopup isClose={contactsPopupClosed} close={closeContacts} />
      <PromoBlock
        openPortfolio={openPortfolio}
        openBrief={openBrief}
        openContacts={openContacts}
        className={sectionsClassNames[sections.promoBlock]}
      />
      <WhatWeCanDo
        openContacts={openContacts}
        className={sectionsClassNames[sections.whatWeCanDo]}
      />
      <WhyUs openContacts={openContacts} className={sectionsClassNames[sections.whyUs]} />
      <Portfolio id="portfolio" className={sectionsClassNames[sections.portfolio]} />
      <Faq className={sectionsClassNames[sections.faq]} />
      <ContactsAndFooter className={sectionsClassNames[sections.contactsAndFooter]} />
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
