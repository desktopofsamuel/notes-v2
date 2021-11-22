import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Box,
  Text,
  chakra,
  Grid,
  SimpleGrid,
  useColorModeValue,
  Tooltip,
  Center,
  keyframes
} from '@chakra-ui/react';
import { FaPlayCircle, FaVolumeDown } from 'react-icons/fa';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from '@/components/gatsby-link';

const ArtistImage = chakra(GatsbyImage);

const bounce = keyframes`
10% {
    transform: scaleY(0.3); /* start by scaling to 30% */
  }

  30% {
    transform: scaleY(1); /* scale up to 100% */
  }

  60% {
    transform: scaleY(0.5); /* scale down to 50% */
  }

  80% {
    transform: scaleY(0.75); /* scale up to 75% */
  }

  100% {
    transform: scaleY(0.6); /* scale down to 60% */
  }
`

const animation = `${bounce} 2.2s ease infinite alternate`

const MusicCard = () => {
  const data = useStaticQuery(graphql`
    query MusicCardQuery {
      allSpotifyTopArtist(sort: { fields: order }, limit: 4) {
        edges {
          node {
            id
            name
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 160, height: 160)
                }
              }
            }
            external_urls {
              spotify
            }
          }
        }
      }
    }
  `);
  return (
    <>
      {data.allSpotifyTopArtist.edges && (
        <Box
          backgroundColor={useColorModeValue('gray.100', 'gray.700')}
          p="4"
          borderRadius="16"
          gridColumn={{ base: 'span 2', md: 'initial' }}
        >
          <Text m="0" mb="2">
            🎧 最近在聽
          </Text>
          <SimpleGrid
            columns={2}
            row={2}
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            {data.allSpotifyTopArtist.edges.map((artist, index) => (
              <Center textAlign="center" flexDirection="column">
                <Link
                  to={artist.node.external_urls.spotify}
                  title={`Listen to ${artist.node.name} now on Spotify`}
                  target="_blank"
                  key={artist.node.id}
                >
                  <Box
                    w="80px"
                    h="80px"
                    role="group"
                    backgroundColor="black"
                    borderRadius="50%"
                    position="relative"
                    transition="all 100ms ease-in-out"
                  >
                    <Box
                      position="absolute"
                      zIndex="100"
                     top="26px"
                     left="26px"
                      opacity={0}
                      w="25px"
                      h="25px"
                      right="0"
                      bottom="0"
                      color="white"
                      transition="all 100ms ease-in-out"
                      _groupHover={{ opacity: 1 }}
                    >
                      {/* <FaVolumeDown size="20px" /> */}
                      <Box position="relative" display="flex" justifyContent="space-between" width="30px" height="30px">
                      <Box backgroundColor="white"  width="4px" height="100%" borderRadius="6px" animation={animation} transformOrigin="bottom" />
                      <Box backgroundColor="white"  width="4px" height="100%" borderRadius="6px" animation={animation} transformOrigin="bottom" style={{ animationDelay: '-2.2s' }}/>
                      <Box backgroundColor="white"  width="4px" height="100%" borderRadius="6px" animation={animation} transformOrigin="bottom" style={{ animationDelay:"-3.7s" }}/>
                      <Box backgroundColor="white"  width="4px" height="100%" borderRadius="6px" animation={animation} transformOrigin="bottom" style={{ animationDelay:"-4.2s" }}/>
                      </Box>
                    </Box>
                    <ArtistImage
                      position="absolute"
                      top="0"
                      left="0"
                      zIndex="1"
                      w="80px"
                      h="80px"
                      image={
                        artist.node.image.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt={artist.node.name}
                      borderRadius="50%"
                      _groupHover={{ opacity: 0.8 }}
                    />
                  </Box>
                </Link>
                <Text m="0" mt={2}>
                  {artist.node.name}
                </Text>
              </Center>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};

export default MusicCard;
