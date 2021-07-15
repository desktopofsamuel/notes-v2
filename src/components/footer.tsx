import React from 'react';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import Newsletter from '@/components/newsletter-form';

const Footer = ({}) => {
  return (
    <Box p="5">
      <VStack my="20">
        <Heading>Join the Newsletter</Heading>
        <Text>Subscribe to get our latest content by email.</Text>
        <Newsletter />
      </VStack>
    </Box>
  );
};

export default Footer;
