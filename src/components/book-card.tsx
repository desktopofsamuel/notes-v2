import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import Link from '@/components/gatsby-link';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const BookCard = () => {
  const data = useStaticQuery(graphql`
    query BookCardPage {
  allFeedOku(limit: 4, sort: {fields: isoDate, order: DESC}) {
    edges {
      node {
        id
        title
        contentSnippet
        creator
        guid
        isoDate
      }
    }
  }
}
  `);
  return (
    <>
      {data.allFeedOku.edges && (
        <Box
          backgroundColor={useColorModeValue('gray.100', 'gray.700')}
          p="4"
          borderRadius="16"
          gridColumn={{ base: 'span 2', md: 'initial' }}
        >
          <Text m="0" mb="2">
            📚 最近在讀
          </Text>
          {data.allFeedOku.edges.map((book) => (
            <Box key={book.node.id} mb="4">
              <Link
                fontSize="lg"
                fontWeight="bold"
                lineHeight="short"
                to={book.node.guid}
                title={`Read more about ${book.node.title} on Oku`}
                target="_blank"
                isExternal
              >
                {book.node.title} <ExternalLinkIcon mx="2px" />
              </Link>

              <Text m="0" fontSize="xs" textTransform="uppercase">
                by {book.node.creator}
              </Text>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default BookCard;
