import React, { useState, useRef, useEffect } from "react";

import "../styles/common.scss";

import { Layout } from "../components/Layout";
import { ContactsPopup } from "../components/ContactsPopup/ContactsPopup";
import { PromoBlock } from "../components/PromoBlock";
import { Portfolio } from "../components/Portfolio";
import { Partnership } from "../components/Partnership";
import { WhyUs } from "../components/WhyUs";
import { ContactsAndFooter } from "../components/ContactsAndFooter";
import { Seo } from "../components/seo";

function closeScrollToBody() {
  document.body.classList.add("hidden");
}

function openScrollToBody() {
  document.body.classList.remove("hidden");
}

const observerOptions = {
  root: null,
  threshold: 0.5,
  rootMargin: "-30px",
};

const IndexPage = () => {
  const [contactsPopupClosed, setContactsPopupClosed] = useState(true);

  const promoBlockRef = useRef(null);
  const portfolioRef = useRef(null);
  const whyUsRef = useRef(null);
  const partnershipRef = useRef(null);
  const contactsRef = useRef(null);

  const [visibleSection, setVisibleSection] = useState("");

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.1) {
          const id = entry.target.dataset.name;
          setVisibleSection(id);
          window.history.replaceState(null, null, "#" + id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    observer.observe(promoBlockRef.current);
    observer.observe(portfolioRef.current);
    observer.observe(whyUsRef.current);
    observer.observe(partnershipRef.current);
    observer.observe(contactsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const openContacts = () => {
    closeScrollToBody();
    setContactsPopupClosed(false);
  };

  const closeContacts = () => {
    setContactsPopupClosed(true);
    openScrollToBody();
  };

  return (
    <Layout openContacts={openContacts} visibleSection={visibleSection}>
      <ContactsPopup isClose={contactsPopupClosed} close={closeContacts} />
      <PromoBlock ref={promoBlockRef} openContacts={openContacts} />
      <Portfolio ref={portfolioRef} />
      <WhyUs ref={whyUsRef} openContacts={openContacts} />
      <Partnership ref={partnershipRef} openContacts={openContacts} />
      <ContactsAndFooter ref={contactsRef} />
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
