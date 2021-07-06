import React from 'react';
import Layout from '@/components/layout';
import GatsbyLink from '@/components/gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { useSiteMetadata, useTagsList } from '../hooks';
import { UnorderedList, ListItem } from '@chakra-ui/react';

const TagList = ({}) => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useTagsList();
  return (
    <Layout>
      <UnorderedList>
        {tags.map((tag) => (
          <ListItem key={tag.fieldValue}>
            <GatsbyLink to={`/tag/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </GatsbyLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Layout>
  );
};

export default TagList;
