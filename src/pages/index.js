import React, { useState } from "react";

import HeroPage from "../components/HeroPage/index.js";
import ContactsPage from "../components/ContactsPage/index.js";
import "/src/styles/index.scss";

const mainStyle = {
  height: "100%",
}


const IndexPage = () => {
  const [isContactsHidden, setContactsHiddenState] = useState(true);
  return (
    <main style={mainStyle}>
      <title>Mozy • Мобильные приложения</title>
      <HeroPage setContactsHiddenState={setContactsHiddenState}></HeroPage>
      <ContactsPage isContactsHidden={isContactsHidden} setContactsHiddenState={setContactsHiddenState}></ContactsPage>
    </main>
  );
}

export default IndexPage
