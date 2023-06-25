import * as React from "react";
import { Seo } from "../components/seo";

const NotFoundPage = () => {
  return <main>Страница не обнаружена :(</main>;
};

export default NotFoundPage;

export const Head = () => (
  <>
    <html lang="ru" />
    <Seo title="Страница не найдена • Студия разработки Mozy — делаем сайты и приложения"></Seo>
  </>
);
