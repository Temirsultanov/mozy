import * as React from "react";
import { Seo } from "../components/seo";

const NotFoundPage = () => {
  return (<main>Страница не обнаружена :(</main>);
};

export default NotFoundPage;

export const Head = () => (
  <>
    <html lang="ru" />
    <Seo title="Страница не найдена • Mozy • Соединяем идеи и технологии • Диджитал-агенство • Разработка сайтов, приложений"></Seo>
  </>
  
);
