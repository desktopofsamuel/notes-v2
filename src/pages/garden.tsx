import React from 'react';
import Layout from '@/components/layout';
import GatsbyLink from '@/components/gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { useSiteMetadata, useTagsList } from '../hooks';
import { UnorderedList, ListItem, Heading, Wrap } from '@chakra-ui/react';
import Tag from '@/components/tag';
import AppCard from '@/components/app-card';
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
      <AppCard
        title="Pixelmator Pro"
        image="https://www.imore.com/sites/imore.com/files/styles/medium/public/field/image/2020/11/pixelmator-pro.jpg"
        description="Pixelmator is an epic photo and graphic editing program that lets you create and manipulate images, illustrations, and a whole lot more. They're best known for their robust painting tools, which are fully customizable."
        label="$39.99 at Mac App Store"
        link="https://apps.apple.com/us/app/pixelmator-pro/id1289583905?mt=12"
      />
    </Layout>
  );
};

export default Garden;
