import React from 'react';
import Layout from '@/components/layout';
import GatsbyLink from '@/components/gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { useSiteMetadata, useCategoriesList } from '../hooks';
import { UnorderedList, ListItem, Heading } from '@chakra-ui/react';

const CategoryList = ({}) => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();
  return (
    <Layout>
      <Heading>Categories</Heading>
      <UnorderedList>
        {categories.map((category) => (
          <ListItem key={category.fieldValue}>
            <GatsbyLink to={`/category/${kebabCase(category.fieldValue)}/`}>
              {category.fieldValue} ({category.totalCount})
            </GatsbyLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Layout>
  );
};

export default CategoryList;
