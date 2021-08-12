import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Text, chakra, SimpleGrid } from '@chakra-ui/react';
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
        <Box backgroundColor="gray.100" p="4" borderRadius="16">
          <Text m="0">I'm listening to</Text>
          <SimpleGrid columns={2} rows={3} spacing={10}>
            {data.allSpotifyTopArtist.edges.map((artist, index) => (
              <Link
                to={artist.node.external_urls.spotify}
                target="_blank"
                key={artist.node.id}
              >
                <ArtistImage
                  image={
                    artist.node.image.localFile.childImageSharp.gatsbyImageData
                  }
                  alt={artist.node.name}
                  objectFit="cover"
                  w="100px"
                  h="100px"
                  transition="all 0.2s ease-in-out"
                  loading="lazy"
                  _groupHover={{ transform: 'scale(1.05)' }}
                />
                <Text key={index}>{artist.node.name}</Text>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};

export default MusicCard;
