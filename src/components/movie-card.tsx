import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Box,
  Text,
  chakra,
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
    const elements = htmlString.slice(14, imgTagPosition);
    imgLink = elements;
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
          <Text m="0">最近在看</Text>
          <Grid gridTemplateColumns="repeat(auto-fit, 120px)">
            {data.allFeedLetterboxd.edges.map((movie, index) => (
              <Box
                key={movie.node.id}
                mr="-30px"
                zIndex={index}
                _hover={{ zIndex: '100' }}
                boxShadow="2px 0 7px grey;"
              >
                <Link to={movie.node.link} target="_blank">
                  <Tooltip label={movie.node.title} fontSize="md">
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
