import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import PostList from '@/components/post-list';
import Pagination from '@/components/pagination';
import Helmet from 'react-helmet';
import { PageContext, AllMdx } from '@/type';
import { useSiteMetadata } from '../hooks';
import MusicCard from '@/components/music-card';
import BookCard from '@/components/book-card';
import MovieCard from '@/components/movie-card';
import { SimpleGrid, Divider, Heading, Text } from '@chakra-ui/react';

type Props = {
  data: AllMdx;
  pageContext: PageContext;
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } =
    pageContext;
  const { edges } = data.allMdx;
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    description: siteDescription,
  } = useSiteMetadata();
  const pageTitle =
    currentPage > 0
      ? `所有文章 — 第${currentPage}頁 | ${siteTitle}`
      : siteTitle;

  return (
    <Layout subtitle={siteSubtitle} description={siteDescription}>
      <Helmet title={pageTitle} />
      {hasPrevPage === false && (
        <>
          <Heading fontSize="md">近期 Now</Heading>
          <SimpleGrid columns={2} spacing={4} mb="8">
            <MusicCard />
            <BookCard />
            <MovieCard />
          </SimpleGrid>
          <Divider my="10" />
        </>
      )}
      <PostList edges={edges} />
      {(hasPrevPage || hasNextPage) && (
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      )}
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: {
          template: { eq: "post" }
          draft: { ne: true }
          category: { ne: "app" }
        }
      }
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
