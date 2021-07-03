import React from 'react';
import { PageProps } from 'gatsby';
import Title from '@/components/Title';
import Layout from '@/components/layout';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Container, Button, useColorMode } from '@chakra-ui/react';

const Home: React.FC<PageProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
      </Container>
    </Layout>
  );
};

export default Home;
