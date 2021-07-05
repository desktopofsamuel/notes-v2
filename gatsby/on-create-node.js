'use strict';
const path = require(`path`);
const _ = require('lodash');
// const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // fmImagesToRelative(node);

  if (node.internal.type === 'Mdx') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      // const dirname = getNode(node.parent).relativeDirectory;
      // if ( node.fileAbsolutePath.contains === )
      createNodeField({
        node,
        name: 'slug',
        value: `/posts/${node.frontmatter.slug}`,
      });
    } else {
      // } else {
      //   const value = createFilePath({ node, getNode });
      //   createNodeField({
      //     node,
      //     name: 'slug',
      //     value,
      //   });
      // if (node.frontmatter.tags) {
      //   const tagSlugs = node.frontmatter.tags.map(
      //     (tag) => `/tag/${_.kebabCase(tag)}/`,
      //   );
      //   createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
      // }
      // if (node.frontmatter.category) {
      //   const categorySlug = `/category/${_.kebabCase(
      //     node.frontmatter.category,
      //   )}/`;
      //   createNodeField({ node, name: 'categorySlug', value: categorySlug });
      // }
    }
  }
};

module.exports = onCreateNode;
