import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Box,
  Text,
  chakra,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from '@/components/gatsby-link';
import { ExternalLinkIcon } from '@chakra-ui/icons';

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
        <Box
          backgroundColor={useColorModeValue('gray.100', 'gray.700')}
          p="4"
          borderRadius="16"
          gridColumn={{ base: 'span 2', md: 'initial' }}
        >
          <Text m="0">最近在讀</Text>
          {data.allFeedOku.edges.map((book) => (
            <Box key={book.node.id} mb="8">
              <Link
                fontSize="lg"
                fontWeight="bold"
                lineHeight="short"
                to={book.node.guid}
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
