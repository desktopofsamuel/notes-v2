import React from 'react';
import dayjs from 'dayjs';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { chakra, Heading, Text, Wrap, HStack } from '@chakra-ui/react';
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
  hideMeta: boolean;
};

const Post = ({ post, hideMeta }: PostType) => {
  const { body } = post;
  // const { tagSlugs, slug } = post.fields;
  // const { tags, title, date } = post.frontmatter;
  const { tags, title, date, category } = post.frontmatter;
  return (
    <>
      {hideMeta ? null : (
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
      )}
      <Heading variant="pagetitle" mt="2" mb="8">
        {title}
      </Heading>
      <MDX>{body}</MDX>
      <Wrap spacing="2">
        {tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </Wrap>
    </>
  );
};

export default Post;
