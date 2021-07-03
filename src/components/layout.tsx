import React from 'react';
import Helmet from 'react-helmet';
import { ChakraProvider, Container, Box, Grid } from '@chakra-ui/react';
import Sidebar from '@/components/sidebar';
import customTheme from '../../theme';

const Layout: React.FC = ({ children }) => (
  <main>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+HK:300,400,500,700&display=swap&subset=chinese-hongkong"
        rel="stylesheet"
      />
      <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
    </Helmet>

    <ChakraProvider theme={customTheme}>
      <Container maxW="container.xl">
        <Grid gridTemplateColumns="300px auto" py="10">
          <Sidebar />
          <Box>{children}</Box>
        </Grid>
      </Container>
    </ChakraProvider>
  </main>
);

export default Layout;
