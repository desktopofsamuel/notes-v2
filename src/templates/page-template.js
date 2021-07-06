import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import Post from '@/components/post';
import MDXCompProvider from '@/components/mdx-provider';

const PageTemplate = ({ data }) => (
  <MDXCompProvider>
    <Layout>
      <Post post={data.mdx} />
    </Layout>
  </MDXCompProvider>
);

export const query = graphql`
  query PageBySlug($slug: String!) {
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

export default PageTemplate;
