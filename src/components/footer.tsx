import React from 'react';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import Newsletter from '@/components/newsletter-form';

const Footer = ({}) => {
  return (
    <Box background="blue.50" p="5" borderRadius="full">
      <VStack my="20">
        <Heading>
          A front-end web development newsletter that sparks joy
        </Heading>
        <Text>
          My goal with this blog is to create helpful content for front-end web
          devs, and my newsletter is no different! It includes early previews to
          upcoming posts and access to special bonus goodies. No spam,
          unsubscribe at any time.
        </Text>
        <Newsletter />
      </VStack>
    </Box>
  );
};

export default Footer;
