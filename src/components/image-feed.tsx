import React from 'react';
import dayjs from 'dayjs';
import Link from '@/components/gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  chakra,
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const BackgroundImage = chakra(GatsbyImage);

type EdgesType = {
  edge: {
    node: {
      excerpt: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        date: string;
        category: [string];
        title: string;
        description: string;
        socialImage: {
          childImageSharp: {
            any;
          };
        };
      };
    };
  };
};

const ImageFeed = ({ edge }: EdgesType) => (
  <Link to={edge.node.fields.slug} key={edge.node.fields.slug}>
    <Box
      role="group"
      height="500px"
      width="100%"
      position="relative"
      borderRadius="xl"
      overflow="hidden"
    >
      <Box
        bgGradient="linear(to-b, blackAlpha.200, blackAlpha.500)"
        _groupHover={{ opacity: '0.5' }}
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        zIndex="1"
        transition="all 0.2s ease-in-out"
      />
      {edge.node.frontmatter.socialImage && (
        <BackgroundImage
          image={
            edge.node.frontmatter.socialImage.childImageSharp.gatsbyImageData
          }
          alt={edge.node.frontmatter.title}
          zIndex="-1"
          height="100%"
          transition="all 0.2s ease-in-out"
          loading="lazy"
          _groupHover={{ transform: 'scale(1.05)' }}
        />
      )}

      <VStack
        spacing="2"
        align="flex-start"
        position="absolute"
        bottom="0"
        p="4"
        zIndex="2"
      >
        <Text
          as="time"
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
          color="whiteAlpha.700"
        >
          {dayjs(edge.node.frontmatter.date).format(`MMMM YYYY`)}
        </Text>

        <Heading as="h2" fontSize="2xl" mt="2" color="white">
          {edge.node.frontmatter.title}
        </Heading>

        <Text
          noOfLines={3}
          fontSize="sm"
          lineHeight="tall"
          color="whiteAlpha.800"
        >
          {edge.node.frontmatter.description || edge.node.excerpt}
        </Text>
      </VStack>
    </Box>
  </Link>
);

export default ImageFeed;
