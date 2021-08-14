import React from 'react';
import type { Node as ReactNode } from 'react';
import Helmet from 'react-helmet';
import { ChakraProvider, Container, Box, Grid } from '@chakra-ui/react';
import Sidebar from '@/components/sidebar';
import SEO from '@/components/seo';
import customTheme from '../../theme';
import config from '../../config';
import Footer from '@/components/footer';

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
  url,
  ...props
}: Props) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        url={url}
      />
      {/* {console.log(url)} */}

      <Helmet title={title}>
        {/* <html lang={config.lang} />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="publisher" content={config.siteTitleShort} />
        <meta name="author" content={config.siteTitleShort} />
        <meta name="copyright" content={config.copyright} /> */}
      </Helmet>
      <ChakraProvider theme={customTheme} resetCSS={true}>
        <Container maxW="container.lg">
          <Grid
            gridTemplateColumns={{
              base: '100%',
              md: 'minmax(0, 200px) auto',
              lg: 'minmax(0, 200px) minmax(0,1px) auto',
            }}
            py="10"
            gap={{ base: '0', md: '2', lg: '10' }}
          >
            <Sidebar />
            <Box
              background="linear-gradient(180deg,#e1e1e1 0,#e1e1e1 48%,#fff)"
              height="33vh"
              width="1px"
              display={{ base: 'none', md: 'none', lg: 'block' }}
            />
            <Box as="main">{children}</Box>
          </Grid>
          <Footer />
        </Container>
      </ChakraProvider>
    </>
  );
};

export default Layout;
