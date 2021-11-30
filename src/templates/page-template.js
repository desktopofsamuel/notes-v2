import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/layout';
import Post from '@/components/post';
import MDXCompProvider from '@/components/mdx-provider';
import config from '../../config';

const PageTemplate = ({ data }) => {
  const page = data.mdx;
  const { title, tags } = page.frontmatter;
  const description = page.excerpt;
  const pageTitle = `${title} | ${config.title}`;

  return (
    <MDXCompProvider>
      <Layout
        title={pageTitle}
        description={description}
        keywords={tags}
        url={page.fields.slug}
      >
        {/* {console.log(data)} */}
        <Post post={data.mdx} hideMeta />
      </Layout>
    </MDXCompProvider>
  );
};

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
        # socialImage {
        #   publicURL
        #   childImageSharp {
        #     gatsbyImageData
        #   }
        # }
      }
    }
  }
`;

export default PageTemplate;
