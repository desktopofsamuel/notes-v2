import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Title from '@/components/Title';
import Layout from '@/components/layout';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Container, Button, useColorMode } from '@chakra-ui/react';
import PostList from '@/components/post-list';

const Home: React.FC<PageProps> = ({ data }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { edges } = data.allMdx;
  return (
    <Layout>
      <Container>
        <Title />
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === `light` ? `Dark` : `Light`}
        </Button>
        <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
        <p>
          Follow me on Twitter (
          <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
        </p>
        <Button
          colorScheme="teal"
          mr="4"
          fontWeight="regular"
          onClick={toggleColorMode}
        >
          {colorMode === `light` ? <FaMoon /> : <FaSun />}
        </Button>

        <PostList edges={edges} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  # $postsLimit: Int!, $postsOffset: Int!
  query IndexTemplate {
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
