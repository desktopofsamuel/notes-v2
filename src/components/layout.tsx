import React from 'react';
import type { Node as ReactNode } from 'react';
import Helmet from 'react-helmet';
import { ChakraProvider, Container, Box, Grid } from '@chakra-ui/react';
import Sidebar from '@/components/sidebar';
import SEO from '@/components/seo';
import customTheme from '../../theme';
import config from '../../config';

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  socialImage?: string;
  slug?: string;
  isPost: boolean;
  keywords: Array<string>;
};

const Layout: React.FC = ({
  children,
  title,
  description,
  keywords,
  ...props
}: Props) => {
  return (
    <>
      <SEO title={title} description={description} keywords={keywords} />
      <Helmet title={`${title}  | ${config.siteTitle}`}>
        <html lang={config.lang} />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="publisher" content={config.siteTitleShort} />
        <meta name="author" content={config.siteTitleShort} />
        <meta name="copyright" content={config.copyright} />
      </Helmet>
      <ChakraProvider theme={customTheme}>
        <Container maxW="container.lg">
          <Grid
            gridTemplateColumns={{ base: '100%', md: '33% 66%' }}
            py="10"
            gap="10"
          >
            <Sidebar />
            <Box as="main">{children}</Box>
          </Grid>
        </Container>
      </ChakraProvider>
    </>
  );
};

export default Layout;
