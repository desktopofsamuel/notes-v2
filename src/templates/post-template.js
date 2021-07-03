import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import { Heading } from '@chakra-ui/react';

const PostTemplate = ({ data }) => (
  <>
    {console.log(data)}
    <Layout>
      <Heading>Hello</Heading>
    </Layout>
  </>
);

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
      }
      excerpt
    }
  }
`;

export default PostTemplate;
