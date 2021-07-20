import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import ImageFeed from '@/components/image-feed';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import { useSiteMetadata } from '../hooks';

const TravelPage = ({ data }) => {
  const { edges } = data.allMdx;
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    description: siteDescription,
  } = useSiteMetadata();
  const pageTitle = `#地圖 | ${siteTitle}`;

  return (
    <Layout title={pageTitle}>
      <Heading as="h1">#地圖</Heading>
      <SimpleGrid spacing="4" columns={{ base: 1, sm: 2 }}>
        {edges.map((edge) => (
          <ImageFeed edge={edge} />
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export const query = graphql`
  query TravelPage {
    allMdx(
      filter: {
        frontmatter: {
          category: { eq: "地圖" }
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

export default TravelPage;
