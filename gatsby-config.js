const siteConfig = require('./config.js');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    description: siteConfig.description,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    category: siteConfig.category,
    author: siteConfig.author,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'media',
        path: `${__dirname}/static/media`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/templates/default-template.js'),
        },
        plugins: [
          `gatsby-remark-images`,
          'gatsby-remark-unwrap-images',
          // `gatsby-remark-images-medium-zoom`, // Important!
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              // staticFolderName: 'media',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              // include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              // exclude: ['featured.skip'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },

    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Inter',
              variants: ['400', '700'],
              subsets: ['latin'],
              fontDisplay: 'swap',
            },
            {
              family: 'Noto Sans HK',
              variants: ['400', '700'],
              fontDisplay: 'swap',
            },
            {
              family: 'Space Mono',
              variants: ['400'],
              fontDisplay: 'swap',
            },
          ],
        },
        useMinify: true,
        usePreload: true,
      },
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       // "gatsby-remark-relative-images",
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 1920,
    //           linkImagesToOriginal: false,
    //           backgroundColor: 'transparent',
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  site_url: url
                  title
                  description
                }
              }
            }
          `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.site_url + edge.node.fields.slug,
                guid: site.siteMetadata.site_url + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
                {
                  allMdx(
                    limit: 1000,
                    sort: { order: DESC, fields: [frontmatter___date] },
                    filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
                  ) {
                    edges {
                      node {
                        html
                        fields {
                          slug
                        }
                        frontmatter {
                          title
                          date
                          template
                          draft
                          description
                        }
                      }
                    }
                  }
                }
              `,
            output: '/rss.xml',
            title: siteConfig.title,
          },
        ],
      },
    },
  ],
};
