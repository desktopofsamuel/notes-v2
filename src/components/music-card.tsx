import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Box,
  Text,
  chakra,
  SimpleGrid,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from '@/components/gatsby-link';

const ArtistImage = chakra(GatsbyImage);

const MusicCard = () => {
  const data = useStaticQuery(graphql`
    query MusicCardQuery {
      allSpotifyTopArtist(sort: { fields: order }, limit: 5) {
        edges {
          node {
            id
            name
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
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
          <Text m="0">最近在聽</Text>
          <SimpleGrid columns={2} rows={3} spacing={4}>
            {data.allSpotifyTopArtist.edges.map((artist, index) => (
              <Link
                to={artist.node.external_urls.spotify}
                target="_blank"
                key={artist.node.id}
              >
                <Tooltip label={artist.node.name} textSize="md">
                  <ArtistImage
                    image={
                      artist.node.image.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={artist.node.name}
                    objectFit="cover"
                    w="100px"
                    h="100px"
                    transition="all 0.2s ease-in-out"
                    loading="lazy"
                    _groupHover={{ transform: 'scale(1.05)' }}
                  />
                </Tooltip>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};

export default MusicCard;
