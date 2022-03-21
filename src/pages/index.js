import React, { useState } from "react";

import HeroPage from "../components/HeroPage/index.js";
import Contacts from "../components/Contacts/index.js";
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
      <Contacts isContactsHidden={isContactsHidden} setContactsHiddenState={setContactsHiddenState}></Contacts>
    </main>
  );
}

export default IndexPage
