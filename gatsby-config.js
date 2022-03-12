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
    "gatsby-plugin-mdx",
  ],
};
