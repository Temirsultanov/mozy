import * as React from "react"
import Contacts from "../components/Contacts/index.js";
import HeroPage from "../components/HeroPage/index.js";
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
