import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Box,
  Text,
  Grid,
  useColorModeValue,
  Tooltip,
  Img,
} from '@chakra-ui/react';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import Link from '@/components/gatsby-link';

const MovieCard = () => {
  function rssParser(htmlString) {
    let imgLink = null;
    const searchTerm = `\"/></p>`;
    const imgTagPosition = htmlString.indexOf(searchTerm);
    const elements = htmlString.slice(14, imgTagPosition); // Delete string after the img tag
    imgLink = elements.replace('0-500-0-750', '0-200-0-300'); // Load a smaller image
    // console.log(imgLink);
    return imgLink;
  }

  // .getElementsByTagName('p')[0]

  const data = useStaticQuery(graphql`
    query MovieCardPage {
      allFeedLetterboxd(limit: 5) {
        edges {
          node {
            id
            title
            letterboxd {
              watchedDate
              memberRating
            }
            content
            link
          }
        }
      }
    }
  `);

  // const image = getImage(getTestDiv(movie.node.content));

  return (
    <>
      {data.allFeedLetterboxd.edges && (
        <Box
          backgroundColor={useColorModeValue('gray.100', 'gray.700')}
          p="4"
          borderRadius="16"
          gridColumn="span 2"
        >
          <Text m="0" mb="2">
            🎬 最近在看
          </Text>
          <Grid gridTemplateColumns="repeat(5, 1fr)" transform="scale(0.9)">
            {data.allFeedLetterboxd.edges.map((movie, index) => (
              <Box
                key={movie.node.id}
                mr="-30px"
                zIndex={index}
                transition="all 100ms ease-in-out"
                _hover={{
                  zIndex: '100',
                  transform: 'rotate3d(1, 1, 1,2deg) scale3d(1.1, 1.1, 1.1)',
                }}
                boxShadow="2px 0 7px grey;"
              >
                <Link to={movie.node.link} target="_blank">
                  <Tooltip label={movie.node.title} fontSize="md" mt="10px">
                    <Img
                      src={rssParser(movie.node.content)}
                      alt={movie.node.title}
                    />
                    {/* <Text>{movie.node.title}</Text> */}
                  </Tooltip>
                </Link>
              </Box>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default MovieCard;
