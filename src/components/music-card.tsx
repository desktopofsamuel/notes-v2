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
} from '@chakra-ui/react';
import { FaPlayCircle, FaVolumeDown } from 'react-icons/fa';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from '@/components/gatsby-link';

const ArtistImage = chakra(GatsbyImage);

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
                      transform="translate(50%,50%)"
                      opacity={0}
                      w="25px"
                      h="25px"
                      right="0"
                      bottom="0"
                      transition="all 100ms ease-in-out"
                      _groupHover={{ opacity: 1 }}
                    >
                      <FaVolumeDown size="20px" />
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