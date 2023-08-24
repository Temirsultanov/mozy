module.exports = {
  siteMetadata: {
    title: "Студия разработки Mozy — делаем сайты и приложения",
    siteUrl: `https://mozy.dev`,
    description: "Первый рабочий прототип через 30 дней. Бесплатно составляем техническое задание после брифа и переговоров. Разрабатываем IOS и Android приложения, сайты, Windows, MacOS и Linux приложения и UX/UI дизайн",
    keywords: "Разработка, приложение, сайт, мобильное, iOS, Android, Web, Windows, MacOS, Linux, React Native, JavaScript"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: 92975138,
        webvisor: true,
        trackHash: true,
        afterBody: true,
        defer: false,
      },
    },
  ],
};
