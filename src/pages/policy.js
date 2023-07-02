import React from "react";
import "../styles/common.scss";

import { Policy } from "../components/Policy";
import { Seo } from "../components/seo";

const IndexPage = () => {
  return <Policy />;
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="ru" />
    <Seo title="Политика конфиденциальности • Студия разработки Mozy — делаем сайты и приложения"></Seo>
  </>
);
