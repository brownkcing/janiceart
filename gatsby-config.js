require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Janice's Artwork`,
  },
  plugins: [
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        // other options
        useMediumZoom: {
          margin: 24,
          background: 24,
          scrollOffset: 0,
        }, // If this option is empty, not apply medium zoom feature.
      },
    },
  ],
}
