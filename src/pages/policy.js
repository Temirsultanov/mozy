import React from "react";
import "../styles/common.scss";

import { Layout } from "../components/Layout";
import { Policy } from "../components/Policy";
import { Seo } from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Policy />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="ru" />
    <Seo title="Политика конфиденциальности • Mozy — Cтудия разработки"></Seo>
  </>
);
