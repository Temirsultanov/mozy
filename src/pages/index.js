import React, { useState } from "react";

import HeroPage from "../components/HeroPage";
import ContactsPage from "../components/ContactsPage";
import Doors from "../components/Doors"
import "/src/styles/index.scss";

const mainStyle = {
  minHeight: "100%",
  display: "flex",
}


const IndexPage = () => {
  const [isContactsHidden, setContactsHiddenState] = useState(true);
  return (
    <main style={mainStyle}>
      <title>Mozy • Мобильные приложения</title>
      <HeroPage setContactsHiddenState={setContactsHiddenState}></HeroPage>
      <ContactsPage isContactsHidden={isContactsHidden} setContactsHiddenState={setContactsHiddenState}></ContactsPage>
      <Doors></Doors>
    </main>
  );
}

export default IndexPage
