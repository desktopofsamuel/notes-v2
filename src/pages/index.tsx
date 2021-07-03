import React from 'react';
import { PageProps } from 'gatsby';
import Title from '@/components/Title';
import Layout from '@/components/layout';
import { Container } from '@chakra-ui/react';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <Container>
      <Title />
      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </Container>
  </Layout>
);

export default Home;
