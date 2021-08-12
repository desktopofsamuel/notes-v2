import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Text, chakra, SimpleGrid } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from '@/components/gatsby-link';

const BookCard = () => {
  const data = useStaticQuery(graphql`
    query BookCardPage {
      allFeedOku {
        edges {
          node {
            id
            title
            contentSnippet
            creator
            guid
          }
        }
      }
    }
  `);
  return (
    <>
      {data.allFeedOku.edges && (
        <Box backgroundColor="gray.100" p="4" borderRadius="16">
          <Text m="0">I'm reading to</Text>
          {data.allFeedOku.edges.map((book) => (
            <Box key={book.node.id}>
              <Link to={book.node.guid} target="_blank">
                <Text> {book.node.title}</Text>
              </Link>
              <Text>by {book.node.creator}</Text>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default BookCard;
