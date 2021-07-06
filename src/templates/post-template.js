import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import Post from '@/components/post';
import MDXCompProvider from '@/components/mdx-provider';
import { HStack } from '@chakra-ui/react';
import Tag from '@/components/tag';

const PostTemplate = ({ data }) => (
  <MDXCompProvider>
    <Layout>
      <Post post={data.mdx} />
      <HStack spacing={2}>
        {data.mdx.frontmatter.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </HStack>
    </Layout>
  </MDXCompProvider>
);

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt(pruneLength: 300)
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        template
        title
        socialImage
      }
    }
  }
`;

export default PostTemplate;
