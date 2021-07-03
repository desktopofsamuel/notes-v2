import React from 'react';
import Helmet from 'react-helmet';
import { ChakraProvider, SimpleGrid, Box } from '@chakra-ui/react';
import Sidebar from '@/components/sidebar';
import theme from '../../theme';

const Layout: React.FC = ({ children }) => (
  <main>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+HK:300,400,500,700&display=swap&subset=chinese-hongkong"
        rel="stylesheet"
      />
      <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
    </Helmet>

    <ChakraProvider theme={theme}>
      <SimpleGrid>
        <Sidebar />
        <Box>{children}</Box>
      </SimpleGrid>
    </ChakraProvider>
  </main>
);

export default Layout;
