import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useMemo,
  useRef,
} from "react";
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

  function scrollTo(elem) {
    window.scrollTo({
      top: elem.current.offsetTop,
      behavior: "smooth",
    });
  }

  function openBrief() {
    window.open(BRIEF_LINK, "_blank");
  }

  function openPortfolio() {
    setOpened(3);
    setScrolling(true);
    setTimeout(() => {
      setScrolling(false);
    }, DELAY_BETWEEN_SLIDES - 500);
    if (window.innerWidth < MOBILE_HEIGHT) {
      scrollTo(portfolio);
    }
  }

  function openContacts() {
    document.body.classList.add("hidden");
    setContactsPopupClosed(false);
  }

  function closeContacts() {
    document.body.classList.remove("hidden");
    setContactsPopupClosed(true);
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
    <Seo></Seo>
  </>
);
