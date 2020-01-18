require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: { clientOptions:{useUnifiedTopology: true}, connectionString: process.env.GATSBY_CONSTRING, dbName: `kandidict`, collection: [`kanji`]},
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
  ],
  siteMetadata: {
    title: 'My page',
  },
};
