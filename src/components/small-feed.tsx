import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Heading, Text, Grid, chakra, VStack } from '@chakra-ui/react';
import Link from '@/components/gatsby-link';

const Image = chakra(GatsbyImage);

const SmallFeed = ({ edge }) => {
  return (
    <Link to={edge.node.fields.slug} role="group">
      <Grid gridTemplateColumns="100px auto" gap="8">
        <Image
          width="100%"
          image={
            edge.node.frontmatter.socialImage.childImageSharp.gatsbyImageData
          }
          alt={edge.node.frontmatter.title}
        />
        <VStack align="flex-start">
          <Heading as="h2" fontSize="xl" m="0" variant="title">
            {edge.node.frontmatter.title}
          </Heading>
          <Text noOfLines={2}>{edge.node.excerpt}</Text>
        </VStack>
      </Grid>
    </Link>
  );
};

export default SmallFeed;
