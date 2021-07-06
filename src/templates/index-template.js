import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import PostList from '@/components/post-list';
import Pagination from '@/components/pagination';

const IndexTemplate = ({ data, pageContext }) => {
  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } =
    pageContext;
  const { edges } = data.allMdx;
  return (
    <Layout>
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
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            # categorySlug
          }
          excerpt(pruneLength: 300)
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
