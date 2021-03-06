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
  Flex,
  ListItem,
} from '@chakra-ui/react';
import GatsbyLink from '@/components/gatsby-link';
import Link from '@/components/gatsby-link';

const Entry = ({ title, date, commit, description, image, link, label }) => {
  return (
    <ListItem>
    <Box>
       <Grid gap={{ base: "2", md: "8"}} align="stretch" gridTemplateColumns={{ base: "1fr", md: "max-content 1fr"}} >
          <Text
              as="time"
              fontFamily="mono"
              mt="1px"
              fontWeight="bold"
              textTransform="uppercase"
            >
              {dayjs(date).format(`YYYY-MM-DD`)}
          </Text> <Box>
          <Heading fontSize="lg" variant="title">{title}</Heading>
          <Box m="0" dangerouslySetInnerHTML={{__html: description}} ></Box>
             <Link
                to={`https://github.com/desktopofsamuel/notes-v2/commit/${commit}`}
                title='View Commit on Github'
                target="_blank"
                isExternal
              ><Text fontFamily="mono" color="gray.500">{commit.substring(0,6)}</Text></Link>
        </Box>
        </Grid>
       </Box>
    </ListItem>
  );
};

export default Entry;
