import * as React from "react"
import Contacts from "/src/components/Contacts/index.js";
import HeroPage from "/src/components/HeroPage/index.js";
import "/src/styles/index.scss";

const mainStyle = {
  height: "100%",
}
const contactsHidden = {
  visibility: "hidden",
  pointerEvents: "all",
}

const IndexPage = () => {
  return (
    <main style={mainStyle}>
      <title>Mozy • Мобильные приложения</title>
      <HeroPage></HeroPage>
      <Contacts style={contactsHidden}></Contacts>
    </main>
  );
}

export default IndexPage
