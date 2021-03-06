const path = require('path');
const _ = require('lodash');

const createCategoriesPages = require('./pagination/create-categories-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');

const query = `
  {
    pages: allMdx(
      filter: {frontmatter: {draft: {ne: true}, template: {eq: "page"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            category
            template
          }
        }
      }
    }
    posts: allMdx(
      filter: {frontmatter: {draft: {ne: true}, template: {eq: "post"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            category
            template
          }
        }
      }
    }
  }
`;

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // // 404
  // createPage({
  //   path: '/404',
  //   component: path.resolve('./src/templates/not-found-template.js'),
  // });

  // Tags list
  // createPage({
  //   path: '/tags',
  //   component: path.resolve('./src/pages/tag-list.tsx'),
  // });

  // Categories list
  // createPage({
  //   path: '/categories',
  //   component: path.resolve('./src/pages/category-list.tsx'),
  // });

  // createPage({
  //   path: '/pages/travel',
  //   component: path.resolve('./src/templates/travel-list.js'),
  // });

  // createPage({
  //   path: '/pages/digest',
  //   component: path.resolve('./src/templates/short-post-list.js'),
  // });

  // createPage({
  //   path: '/pages/habit',
  //   component: path.resolve('./src/templates/habit.js'),
  // });

  // Posts and pages from markdown

  const response = await graphql(query);
  if (response.errors) throw new Error(response.errors);
  const { posts, pages } = response.data;

  pages.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/page-template.js'),
      context: { slug: node.fields.slug },
    });
  });

  posts.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/post-template.js'),
      context: { slug: node.fields.slug },
    });
  });

  await createTagsPages(graphql, actions);
  await createPostsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
};

module.exports = createPages;

// _.each(edges, (edge) => {
// if (_.get(edge, 'node.frontmatter.template') === 'page') {
//   createPage({
//     path: edge.node.fields.slug,
//     component: path.resolve('./src/templates/page-template.js'),
//     context: { slug: edge.node.fields.slug },
//   });
// }
// if (_.get(edge, 'node.frontmatter.template') === 'digest') {
//   createPage({
//     path: edge.node.fields.slug,
//     component: path.resolve('./src/templates/short-post-template.js'),
//     context: { slug: edge.node.fields.slug },
//   });
// }
//   if (_.get(edge, 'node.frontmatter.template') === 'post') {
//     createPage({
//       path: edge.node.fields.slug,
//       component: path.resolve('./src/templates/post-template.js'),
//       context: { slug: edge.node.fields.slug },
//     });
//   }
// });
