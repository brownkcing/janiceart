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
    },{
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-images-zoom`,
        ],
      }
    },
  ],
}
