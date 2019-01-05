require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: 'jack reynolds',
    description: 'jack reynolds website'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
       resolve: 'gatsby-source-contentful',
       options: {
         spaceId: process.env.CONTENTFUL_SPACE_ID,
         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
       },
     },
  ],
}