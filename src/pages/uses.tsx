import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '@/components/layout';
import {
  Box,
  Heading,
  SimpleGrid,
  Grid,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Link from '@/components/gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const UsesPage = () => {
  const data = useStaticQuery(graphql`
    query UseQuery {
      hardware: allAirtable(
        filter: {
          table: { eq: "Tech" }
          data: { Category: { eq: "Hardware" }, Status: { eq: "Published" } }
        }
        sort: { fields: data___ID }
      ) {
        edges {
          node {
            id
            data {
              Description_tc {
                childMdx {
                  body
                }
              }
              Link
              Image {
                id
                localFiles {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              Name
              Name_tc
              Category
              Platform
              CTA
              ExtraLink
              Order
            }
          }
        }
      }
      software: allAirtable(
        filter: {
          table: { eq: "Tech" }
          data: {
            Category: { ne: "Hardware" }
            Status: { eq: "Published" }
            #   Image: { localFiles: { elemMatch: { extension: { ne: "svg" } } } }
          }
        }
        sort: { fields: data___ID }
      ) {
        edges {
          node {
            id
            data {
              Description_tc {
                childMdx {
                  body
                }
              }
              Link
              Image {
                id
                localFiles {
                  publicURL
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              Name
              Name_tc
              Category
              Platform
              CTA
              ExtraLink
              Order
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Heading as="h1">#我的Setup</Heading>
      {data.hardware.edges.map((item) => (
        <Grid gridTemplateColumns="100px auto" gap="3">
          <Box>
            {/* {!!item.node.data.Image.localFiles.childImageSharp ? (
              <GatsbyImage
                fixed={
                  item.node.data.Image.localFiles.childImageSharp
                    .gatsbyImageData
                }
                width="100px"
                height="100px"
                alt={item.node.data.Name_tc}
              />
            ) : ( */}
            {console.log(item.node.data.Image.localFiles)}
            <GatsbyImage
              image={
                item.node.data.Image.localFiles[0].childImageSharp
                  .gatsbyImageData
              }
              width="100px"
              height="100px"
              placeholder="tracedSVG"
              alt={item.node.data.Name_tc}
            />
          </Box>
          <Box>
            <Heading fontSize="lg">
              {item.node.data.Name_tc || item.node.data.Name}
            </Heading>
            <MDXRenderer>
              {!!item.node.data.Description_tc &&
                item.node.data.Description_tc.childMdx.body}
            </MDXRenderer>
            <Link to={item.node.data.CTA}>View More</Link>
          </Box>
        </Grid>
      ))}
      {/* {data.software.edges.map((item) => (
        <Box>
          <Text>{item.node.data.Name}</Text>
          <MDXRenderer>
            {!!item.node.data.Description_tc &&
              item.node.data.Description_tc.childMdx.body}
          </MDXRenderer>
        </Box>
      ))} */}
    </Layout>
  );
};

export default UsesPage;
