import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import Pagination from '@/components/pagination';
import PostList from '@/components/post-list';
import { Heading } from '@chakra-ui/react';

const CategoryTemplate = ({ data, pageContext }) => {
  const {
    category,
    slug,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;
  const { edges } = data.allMdx;
  return (
    <Layout>
      <Heading>{category}</Heading>
      <PostList edges={edges} />
      <Pagination
        prevPagePath={prevPagePath}
        nextPagePath={nextPagePath}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { category: { eq: $category }, draft: { ne: true } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            # categorySlug
            slug
          }
          excerpt(pruneLength: 300)
          frontmatter {
            date
            description
            category
            title
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
