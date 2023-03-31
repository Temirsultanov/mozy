module.exports = {
  siteMetadata: {
    title:
      "Mozy • Соединяем идеи и технологии • Диджитал-агенство • Разработка сайтов, приложений",
    siteUrl: `https://mozy.gatsbyjs.io`,
    description: "",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
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
