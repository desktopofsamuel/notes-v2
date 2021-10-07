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
          // {
          //   resolve: `gatsby-remark-embedder`,
          //   options: {
          //     customTransformers: [
          //       // Your custom transformers
          //     ],
          //     services: {
          //       youtube: {
          //         height: 480,
          //       },
          //     },
          //   },
          // },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET, // Don't add to public repository
        refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
        fetchPlaylists: false, // optional. Set to false to disable fetching of your playlists
        fetchRecent: true, // optional. Set to false to disable fetching of your recently played tracks
        //timeRanges: ['short_term', 'medium_term', 'long_term'], optional. Set time ranges to be fetched
        timeRanges: ['short_term'], // optional. Set time ranges to be fetched
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://oku.club/rss/collection/UfVaj`,
        name: `Oku`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['itunes:duration'],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://letterboxd.com/samuelisme/rss/`,
        name: `Letterboxd`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: [
              'letterboxd:watchedDate',
              'letterboxd:memberRating',
              'letterboxd:filmTitle',
              'letterboxd:filmYear',
              'description',
              { includeSnippet: true },
            ],
          },
        },
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-HZZK8J63TH', // Google Analytics / GA
          'UA-114278308-6',
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
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
