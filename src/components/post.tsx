import React from 'react';
import dayjs from 'dayjs';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { chakra, Heading, Text, HStack } from '@chakra-ui/react';
import Tag from '@/components/tag';
import GatsbyLink from '@/components/gatsby-link';
import kebabCase from 'lodash/kebabCase';

const MDX = chakra(MDXRenderer);

type PostType = {
  post: {
    frontmatter: {
      title: string;
      tags: [string];
      date: string;
      category: string;
    };
    body: any;
  };
};

const Post = ({ post }: PostType) => {
  const { body } = post;
  // const { tagSlugs, slug } = post.fields;
  // const { tags, title, date } = post.frontmatter;
  const { tags, title, date, category } = post.frontmatter;
  return (
    <>
      <HStack spacing="2">
        <Text
          as="time"
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {dayjs(date).format(`MMMM YYYY`)}
        </Text>
        <GatsbyLink to={`/category/${kebabCase(category)}/`}>
          <Text as="small" fontSize="sm" color="orange.500" fontWeight="bold">
            {category}
          </Text>
        </GatsbyLink>
      </HStack>
      <Heading mt="2" mb="8">
        {title}
      </Heading>
      <MDX>{body}</MDX>
      <HStack flexWrap="wrap" gap="1 2">
        {tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </HStack>
    </>
  );
};

export default Post;
