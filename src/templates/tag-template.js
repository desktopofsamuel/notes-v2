import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import PostList from '@/components/post-list';
import Pagination from '@/components/pagination';
import { Heading } from '@chakra-ui/react';

const TagTemplate = ({ data, pageContext }) => {
  const {
    tag,
    slug,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { edges } = data.allMdx;
  const pageTitle =
    currentPage > 0
      ? `所有關於"${tag}"的文章 - 第${currentPage}頁 - hi`
      : `所有關於"${tag}"的文章 - hi`;

  return (
    <Layout>
      <Heading as="h1" mb="8">
        {tag}
      </Heading>
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
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    # site {
    #   siteMetadata {
    #     title
    #     subtitle
    #   }
    # }
    allMdx(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { tags: { in: [$tag] }, draft: { ne: true } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
            # categorySlug
          }
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

export default TagTemplate;
