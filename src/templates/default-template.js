import React from 'react';
import Layout from '@/components/layout';
import MDXCompProvider from '@/components/mdx-provider';

const DefaultPageTemplate = ({ children }) => (
  <MDXCompProvider>
    <Layout>
      {children}
      {/* {console.log(children)} */}
    </Layout>
  </MDXCompProvider>
);

export default DefaultPageTemplate;
