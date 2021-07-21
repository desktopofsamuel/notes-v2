import React from 'react';
import {
  Box,
  Card,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Grid,
  Wrap,
} from '@chakra-ui/react';
import GatsbyLink from '@/components/gatsby-link';

const AppCard = ({ title, description, image, link, label }) => {
  return (
    <Box border="4px solid black" p="4" my="4">
      <Grid gridTemplateColumns="150px auto" gap={10}>
        <Image maxW="150px" src={image} alt={title}></Image>
        <Wrap>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <GatsbyLink to={link}>
            <Button variant="brand">{label}</Button>
          </GatsbyLink>
        </Wrap>
      </Grid>
    </Box>
  );
};

export default AppCard;
