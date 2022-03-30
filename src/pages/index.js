import React, { useState } from "react";

import HeroPage from "../components/HeroPage";
import ContactsPopup from "../components/ContactsPopup";
import Doors from "../components/Doors"
import "/src/styles/index.scss";

const IndexPage = () => {
  const [isContactsHidden, setContactsHiddenState] = useState(true);
  
  const openContacts = () => {
    setContactsHiddenState(false);
  }
  const closeContacts = () => {
    setContactsHiddenState(true);
  }

  return (
    <main className="mozy">
      <title>Mozy • Мобильные приложения</title>
      <HeroPage openContacts={openContacts}></HeroPage>
      <ContactsPopup isContactsHidden={isContactsHidden} closeContacts={closeContacts}></ContactsPopup>
      <Doors></Doors>
    </main>
  );
}

export default IndexPage;
