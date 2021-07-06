import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { chakra, Heading } from '@chakra-ui/react';

const MDX = chakra(MDXRenderer);

type PostType = {
  post: {
    frontmatter: {
      title: string;
      tags: [string];
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
    <>
      <Heading>{title}</Heading>
      <MDX>{body}</MDX>
    </>
  );
};

export default Post;
