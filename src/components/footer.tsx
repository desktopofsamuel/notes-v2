import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Container,
  Input,
  Button,
  Stack,
} from '@chakra-ui/react';

const Footer = ({}) => {
  return (
    <VStack my="20">
      <Heading>A front-end web development newsletter that sparks joy</Heading>
      <Text>
        My goal with this blog is to create helpful content for front-end web
        devs, and my newsletter is no different! It includes early previews to
        upcoming posts and access to special bonus goodies. No spam, unsubscribe
        at any time.
      </Text>
      <HStack spacing="4">
        <Input placeholder="朋友，你的名字"></Input>
        <Input placeholder="你的電郵"></Input>
        <Button colorScheme="primary.500" variant="ghost" w="100px">
          登記
        </Button>
      </HStack>
    </VStack>
  );
};

export default Footer;
