import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useMemo,
  useRef,
} from "react";
import "../styles/common.scss";

import smoothscroll from 'smoothscroll-polyfill';
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

function scrollTo(elem) {
  window.scrollTo({
    top: elem.offsetTop,
    behavior: "smooth",
  });
}

function onDocumentTouchtart(event) {
  event.preventDefault();
}

smoothscroll.polyfill();

const IndexPage = () => {
  const [opened, setOpened] = useState(sections.promoBlock);
  const [closed, setClosed] = useState(sections.promoBlock);
  const [contactsPopupClosed, setContactsPopupClosed] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let onMouseWheel = function (event) {
      if (window.innerWidth < MOBILE_HEIGHT) return;
      if (contactsPopupClosed === false) return;
      if (scrolling === true) return;

      if (isScrollDown(event)) {
        setOpened((cur) => {
          if (cur < sections.contactsAndFooter) return cur + 1;
          return cur;
        });
      } else if (isScrollUp(event)) {
        setOpened((cur) => {
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
      setClosed(opened);
    }, DELAY_BETWEEN_SLIDES - TIME_TO_CHANGE_CLASSES);
  }, [opened]);

  const promoBlockClassName = useMemo(() => {
    if (opened === sections.promoBlock) return "cur";

    let res = "";
    if (closed === sections.promoBlock) res = "prev ";
    if (opened > sections.promoBlock) return res + "top";
  }, [opened, closed]);

  const whatWeCanDoClassName = useMemo(() => {
    if (opened === sections.whatWeCanDo) return "cur";

    let res = "";
    if (closed === sections.whatWeCanDo) res = "prev ";
    if (opened < sections.whatWeCanDo) return res + "bottom";
    if (opened > sections.whatWeCanDo) return res + "top";
  }, [opened, closed]);

  const whyUsClassName = useMemo(() => {
    if (opened === sections.whyUs) return "cur";

    let res = "";
    if (closed === sections.whyUs) res = "prev ";
    if (opened < sections.whyUs) return res + "bottom";
    if (opened > sections.whyUs) return res + "top";
  }, [opened, closed]);

  const portfolioClassName = useMemo(() => {
    if (opened === sections.portfolio) return "cur";

    let res = "";
    if (closed === sections.portfolio) res = "prev ";
    if (opened < sections.portfolio) return res + "bottom";
    if (opened > sections.portfolio) return res + "top";
  }, [opened, closed]);

  const faqClassName = useMemo(() => {
    if (opened === sections.faq) return "cur";

    let res = "";
    if (closed === sections.faq) res = "prev ";
    if (opened < sections.faq) return res + "bottom";
    if (opened === sections.contactsAndFooter) return res + "top";
  }, [opened, closed]);

  const contactsAndFooterClassName = useMemo(() => {
    if (opened === sections.contactsAndFooter) return "cur";

    let res = "";
    if (closed === sections.contactsAndFooter) res = "prev ";
    if (opened < sections.contactsAndFooter) return res + "bottom";
  }, [opened, closed]);

  const portfolio = useRef(null);
  const contacts = useRef(null);

  function openPortfolio() {
    setOpened(sections.portfolio);
    setScrolling(true);
    setTimeout(() => {
      setScrolling(false);
    }, DELAY_BETWEEN_SLIDES - TIME_TO_CHANGE_CLASSES);
    if (window.innerWidth < MOBILE_HEIGHT) {
      scrollTo(portfolio.current);
    }
  }

  function openContacts() {
    setContactsPopupClosed(false);
    document.body.classList.add("hidden");
    document.body.addEventListener("touchstart", onDocumentTouchtart);
  }

  function closeContacts() {
    setContactsPopupClosed(true);
    document.body.classList.remove("hidden");
    document.body.removeEventListener("touchstart", onDocumentTouchtart);
  }



  return (
    <Layout>
      <ContactsPopup isClose={contactsPopupClosed} close={closeContacts} />
      <PromoBlock
        openPortfolio={openPortfolio}
        openBrief={openBrief}
        openContacts={openContacts}
        className={promoBlockClassName}
      />
      <WhatWeCanDo
        openContacts={openContacts}
        className={whatWeCanDoClassName}
      />
      <WhyUs openContacts={openContacts} className={whyUsClassName} />
      <Portfolio ref={portfolio} className={portfolioClassName} />
      <Faq className={faqClassName} />
      <ContactsAndFooter
        ref={contacts}
        className={contactsAndFooterClassName}
      />
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
