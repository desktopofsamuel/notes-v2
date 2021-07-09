import React from 'react';
import dayjs from 'dayjs';
import Link from '@/components/gatsby-link';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Button,
} from '@chakra-ui/react';

type EdgesType = {
  edges: [
    {
      node: {
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          date: string;
          category: [string];
          title: string;
        };
      };
    },
  ];
};

const ImageFeed = ({ edges }: EdgesType) => (
  <SimpleGrid spacing="4" columns={{ base: 1, sm: 2 }}>
    {edges.map((edge) => (
      <Link to={edge.node.fields.slug}>
        <Box
          height="33vh"
          width="100%"
          position="relative"
          borderRadius="xl"
          overflow="hidden"
        >
          <Box
            bgGradient="linear(to-b, blackAlpha.200, blackAlpha.500)"
            width="100%"
            height="100%"
            position="absolute"
            top="0"
          />
          {!edge.node.frontmatter.socialImage && (
            <Image
              src={edge.node.frontmatter.socialImage}
              alt={edge.node.frontmatter.title}
              height="100%"
              width="100%"
              objectFit="cover"
            />
          )}

          <VStack
            spacing="2"
            align="flex-start"
            position="absolute"
            bottom="0"
            p="4"
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

            <Heading as="h2" fontSize="lg" mt="2" color="white">
              {edge.node.frontmatter.title}
            </Heading>

            <Text
              noOfLines={3}
              fontSize="sm"
              lineHeight="tall"
              color="whiteAlpha.800"
            >
              {edge.node.excerpt}
            </Text>
          </VStack>
        </Box>
      </Link>
    ))}
  </SimpleGrid>
);

export default ImageFeed;
