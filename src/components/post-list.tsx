import React from 'react';
import dayjs from 'dayjs';
import Link from '@/components/gatsby-link';
import { Heading, Text, HStack, VStack, Button } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

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

const PostList = ({ edges }: EdgesType) => (
  <VStack spacing="8">
    {edges.map((edge) => (
      <VStack spacing="2" align="flex-start">
        <HStack spacing="4">
          <Text
            as="time"
            fontSize="sm"
            fontWeight="bold"
            textTransform="uppercase"
          >
            {dayjs(edge.node.frontmatter.date).format(`MMMM YYYY`)}
          </Text>
          <Text as="small" fontSize="sm" color="brand.400">
            {edge.node.frontmatter.category}
          </Text>
        </HStack>
        <Link to={edge.node.fields.slug}>
          <Heading as="h2" fontSize="2xl" mt="2">
            {edge.node.frontmatter.title}
          </Heading>
        </Link>
        <Text noOfLines={3}>{edge.node.excerpt}</Text>
        <Link to={edge.node.fields.slug}>
          <Button
            rightIcon={<FaArrowRight />}
            variant="ghost"
            ml="-18px"
            color="teal.400"
          >
            閱讀更多
          </Button>
        </Link>
      </VStack>
    ))}
  </VStack>
);

export default PostList;
