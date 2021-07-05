import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Heading } from '@chakra-ui/react';

type PostType = {
  post: {
    frontmatter: {
      title: string;
    };
    body: any;
  };
};

const Post = ({ post }: PostType) => {
  const { body } = post;
  // const { tagSlugs, slug } = post.fields;
  // const { tags, title, date } = post.frontmatter;
  const { title } = post.frontmatter;
  return (
    <Box>
      <Heading>{title}</Heading>
      <MDXRenderer>{body}</MDXRenderer>
    </Box>
  );
};

export default Post;
