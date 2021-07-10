import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import Post from '@/components/post';
import MDXCompProvider from '@/components/mdx-provider';
import { HStack } from '@chakra-ui/react';
import Tag from '@/components/tag';
import { useSiteMetadata } from '../hooks';
import SEO from '@/components/seo';

const PostTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const post = data.mdx.frontmatter;
  const postTitle = data.mdx.frontmatter.title;
  const pageTitle = `${postTitle} - ${siteTitle}`;

  return (
    <MDXCompProvider>
      <Layout>
        <SEO postNode={data.mdx} postSEO postPath={data.mdx.fields.slug} />
        <Post post={data.mdx} />
        <HStack flexWrap="wrap" gap="1 2">
          {post.tags && post.tags.map((tag) => <Tag index={tag}>{tag}</Tag>)}
        </HStack>
      </Layout>
    </MDXCompProvider>
  );
};

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
