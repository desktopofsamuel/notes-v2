import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Title from '@/components/Title';
import Layout from '@/components/layout';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Container, Button } from '@chakra-ui/react';
import PostList from '@/components/post-list';

const Home: React.FC<PageProps> = ({ data }) => {
  const { edges } = data.allMdx;
  return (
    <Layout>
      <Container>
        <Title />

        <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
        <p>
          Follow me on Twitter (
          <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
        </p>

        <PostList edges={edges} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  # $postsLimit: Int!, $postsOffset: Int!
  query Index {
    allMdx(
      # limit: $postsLimit
      # skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            # categorySlug
          }
          excerpt(pruneLength: 185)
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default Home;
