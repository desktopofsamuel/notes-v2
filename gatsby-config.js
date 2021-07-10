const siteConfig = require('./config.js');

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
    `gatsby-remark-images`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/templates/default-template.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-unwrap-images',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `pages`,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: false,
        isUsingColorMode: false,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inter:400,700:latin', 'Noto Sans HK:400,700', 'Menlo'],
        },
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
