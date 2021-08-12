import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import ImageFeed from '@/components/image-feed';
import SmallFeed from '@/components/small-feed';
import { Heading, Stack } from '@chakra-ui/react';
import PostList from '@/components/post-list';
import { useSiteMetadata } from '../hooks';

const TechPage = ({ data }) => {
  const featEdges = data.feat.edges;
  const feedEdges = data.feed.edges;
  const appEdges = data.app.edges;
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    description: siteDescription,
  } = useSiteMetadata();
  const pageTitle = `#科技 | ${siteTitle}`;

  return (
    <Layout title="#科技">
      <Heading as="h1">#科技</Heading>
      <Stack spacing="8">
        {featEdges.map((edge) => (
          <ImageFeed edge={edge} />
        ))}
        {/* <Heading as="h2" fontSize="xl">
          評測
        </Heading>
        {appEdges.map((edge) => (
          <SmallFeed edge={edge} />
        ))}
        <Heading as="h2" fontSize="xl">
          所有科技文章
        </Heading>
         */}
        <PostList edges={feedEdges} />
      </Stack>
    </Layout>
  );
};

export const query = graphql`
  query TechPage {
    feat: allMdx(
      filter: {
        frontmatter: {
          category: { eq: "桌面" }
          template: { eq: "post" }
          draft: { ne: true }
          # socialImage: { regex: "/" }
        }
      }
      limit: 4
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
            socialImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    feed: allMdx(
      filter: {
        frontmatter: {
          category: { eq: "桌面" }
          template: { eq: "post" }
          draft: { ne: true }
          # socialImage: { regex: "/" }
        }
      }
      skip: 4
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
            socialImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    app: allMdx(
      filter: {
        frontmatter: {
          category: { eq: "app" }
          template: { eq: "post" }
          draft: { ne: true }
          # socialImage: { regex: "/" }
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
            socialImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default TechPage;
