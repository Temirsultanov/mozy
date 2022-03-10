import * as React from "react"
import Contacts from "/src/components/contacts/index.js";
import "/src/styles/index.scss";

const mainStyle = {
  height: "100%",
}

const IndexPage = () => {
  return (
    <main style={ mainStyle } >
      <Contacts></Contacts>
    </main>
  );
}

export default IndexPage
