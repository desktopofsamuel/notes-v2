import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import PostList from '@/components/post-list';
import Pagination from '@/components/pagination';
import { PageContext, AllMdx } from '@/type';
import { useSiteMetadata } from '../hooks';

type Props = {
  data: AllMdx;
  pageContext: PageContext;
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    description: siteDescription,
  } = useSiteMetadata();
  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } =
    pageContext;
  const { edges } = data.allMdx;

  const pageTitle =
    currentPage > 0
      ? `所有文章 — 第${currentPage}頁 | ${siteTitle}`
      : siteTitle;

  return (
    <Layout
      title={pageTitle}
      subtitle={siteSubtitle}
      description={siteDescription}
    >
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
            categorySlug
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
