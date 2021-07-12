import React from 'react';
import { Tag as ChakraTag, TagLeftIcon, TagLabel } from '@chakra-ui/tag';
import { FaHashtag } from 'react-icons/fa';
import GatsbyLink from '@/components/gatsby-link';
import kebabCase from 'lodash/kebabCase';

const Tag = ({ children }) => (
  <GatsbyLink to={`/tag/${kebabCase(children)}/`}>
    <ChakraTag
      variant="subtle"
      px="3"
      py="2"
      borderRadius="full"
      _hover={{ background: 'primary.500', color: 'white' }}
    >
      <TagLeftIcon width="10px" as={FaHashtag} mr="1" />
      <TagLabel fontWeight="bold">{children}</TagLabel>
    </ChakraTag>
  </GatsbyLink>
);

export default Tag;
