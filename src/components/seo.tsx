import React from 'react';
import { Helmet } from 'react-helmet';
import urljoin from 'url-join';
import dayjs from 'dayjs';
import config from '../../config';

const SEO = ({ postNode, postPath, postSEO }) => {
  let title;
  let description;
  let image;
  let keywords;
  let postURL;

  if (postSEO) {
    const postMeta = postNode.frontmatter;
    title = `${postMeta.title} | ${config.title}`;
    description = postMeta.description
      ? postMeta.description
      : postNode.excerpt;
    image = postMeta.socialImage ? postMeta.socialImage : config.siteLogo;
    postURL = `${config.url + config.pathPrefix + postPath}`;
    keywords = postMeta.tags ? postMeta.tags : config.siteKeywords;
  } else {
    title = config.title;
    description = config.siteDescription;
    image = config.siteLogo;
    keywords = config.siteKeywords;
  }

  // const getImagePath = (imageURI) => {
  //   !imageURI.match(
  //     `(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`,
  //   )
  //     ? urljoin(config.url, config.pathPrefix, imageURI)
  //     : null;

  //   return imageURI;
  // };

  const getPublicationDate = () => {
    if (!postNode) return null;

    if (!postNode.frontmatter) return null;

    if (!postNode.frontmatter.date) return null;

    return dayjs(postNode.frontmatter.date, config.dateFromFormat).toDate();
  };

  // image = getImagePath(image);

  const datePublished = getPublicationDate();

  // const logoJSONLD = {
  //   '@type': 'ImageObject',
  //   url: getImagePath(config.siteLogo),
  // };

  const authorJSONLD = {
    '@type': 'Person',
    name: config.userName,
    email: config.userEmail,
    address: config.userLocation,
  };

  const blogURL = urljoin(config.url, config.pathPrefix);
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];

  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: { '@type': 'ImageObject', url: image },
        author: authorJSONLD,
        publisher: {
          ...authorJSONLD,
          '@type': 'Organization',
          // logo: logoJSONLD,
        },
        datePublished,
        description,
      },
    );
  }

  return (
    <Helmet title={`${title}  | ${config.title}`}>
      <html lang={config.lang} />
      {/* {console.log(postNode, postNode, postPath)} */}
      {/* <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+HK:400,700&display=swap&subset=chinese-hongkong"
        rel="stylesheet"
      />
      <link href="https://rsms.me/inter/inter.css" rel="stylesheet" /> */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="keywords" content={keywords} />
      <meta name="publisher" content={config.title} />
      <meta name="author" content={config.author.name} />
      <meta name="copyright" content={config.copyright} />
      {/* Schema.org tags */}
      <script async type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta
        name="twitter:site"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
