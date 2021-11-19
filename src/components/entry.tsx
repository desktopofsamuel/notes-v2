import React from 'react';
import dayjs from 'dayjs';
import {
  Box,
  Card,
  Column,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  SimpleGrid,
  Grid,
  Wrap,
  ListItem,
} from '@chakra-ui/react';
import GatsbyLink from '@/components/gatsby-link';
import Link from '@/components/gatsby-link';

const Entry = ({ title, date, commit, description, image, link, label }) => {
  return (
    <ListItem>
    <Box>
       <HStack spacing="8" align="stretch">
          <Text
              as="time"
              fontFamily="mono"
              lineHeight="20px"
              fontWeight="bold"
              textTransform="uppercase"
               
            >
              {dayjs(date).format(`YYYY-MM-DD`)}
          </Text> <Box>
          <Heading fontSize="lg" mb="2" color="black">{title}</Heading>
          
          <Text>{description}</Text>
             <Link
                to={`https://github.com/desktopofsamuel/notes-v2/commit/${commit}`}
                title='View Commit on Github'
                target="_blank"
                isExternal
              ><Text fontFamily="mono" color="gray.500">{commit.substring(0,6)}</Text></Link>
        </Box>
        </HStack>
       </Box>
    </ListItem>
  );
};

export default Entry;
