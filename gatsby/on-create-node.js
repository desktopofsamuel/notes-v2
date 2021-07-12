const path = require(`path`);
const _ = require('lodash');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;

  fmImagesToRelative(node);

  if (node.internal.type === 'Mdx') {
    if (node.frontmatter.template === 'page') {
      slug = `/pages/${node.frontmatter.slug}/`;
    } else if (node.frontmatter.template === 'post') {
      slug = `/posts/${node.frontmatter.slug}/`;
    } else {
      slug = `${node.frontmatter.slug}/`;
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        (tag) => `/tag/${_.kebabCase(tag)}/`,
      );
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (node.frontmatter.category) {
      const categorySlug = `/category/${_.kebabCase(
        node.frontmatter.category,
      )}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }
};

module.exports = onCreateNode;
