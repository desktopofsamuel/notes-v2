import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

const SEO = ({ postNode, postPath, postSEO }) => {
  let title;
  let description;
  let image;
  let keywords;
  let postUR;

  if (postSEO) {
    const postMeta = postNode.frontmatter;
    title = `${postMeta.title} | ${config.siteTitleShort}`;
    description = postMeta.tldr ? postMeta.tldr : postNode.excerpt;
    image = postMeta.cover ? postMeta.cover.publicURL : config.siteLogo;
    postURL = `${config.siteUrl + config.pathPrefix + postPath}/`;
    keywords = postMeta.tags ? postMeta.tags : config.siteKeywords;
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteLogo;
    keywords = config.siteKeywords;
  }
  return (
    <Helmet title={`${title}  | ${config.siteTitle}`}>
      <html lang={config.lang} />
      {/* <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+HK:400,700&display=swap&subset=chinese-hongkong"
        rel="stylesheet"
      />
      <link href="https://rsms.me/inter/inter.css" rel="stylesheet" /> */}
    </Helmet>
  );
};

export default SEO;
