import React from 'react';
import Layout from '@/components/layout';
import GatsbyLink from '@/components/gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { useSiteMetadata, useTagsList } from '../hooks';
import { UnorderedList, ListItem, Heading, Wrap } from '@chakra-ui/react';
import Tag from '@/components/tag';
const Garden = ({}) => {
  const tags = useTagsList();
  return (
    <Layout>
      <Heading as="h2">Tags</Heading>
      <UnorderedList>
        <Wrap spacing="2">
          {tags.slice(0, 20).map((tag) => (
            <ListItem key={tag.fieldValue}>
              <Tag key={tag.fieldValue} link={tag.fieldValue}>
                {tag.fieldValue} ({tag.totalCount})
              </Tag>
            </ListItem>
          ))}
        </Wrap>
      </UnorderedList>
    </Layout>
  );
};

export default Garden;
