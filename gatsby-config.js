module.exports = {
  siteMetadata: {
    title: `Ricardo Antonio`,
    siteUrl: `https://ricardoantonio.dev`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fraunces:i400,i500,700', 'Inter:400,500,700,i400,i700', 'JetBrains Mono']
        }
      }
    },
  ],
};
