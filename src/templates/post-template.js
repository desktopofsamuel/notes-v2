import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import Post from '@/components/post';

const PostTemplate = ({ data }) => (
  <Layout>
    <Post post={data.mdx} />
  </Layout>
);

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt
      fields {
        slug
        # tagSlugs
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
