import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Text, chakra, SimpleGrid } from '@chakra-ui/react';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import Link from '@/components/gatsby-link';
import letterboxd from 'letterboxd';
import { move } from 'formik';

const MovieCard = () => {
  let FilmData;

  // letterboxd('desktopofsamuel')
  //   .then((items) =>
  //     items.forEach((item) => {
  //       console.log(item);
  //     }),
  //   )
  //   .catch((error) => console.log(error));

  // ;

  function Striper(data) {
    const imageURL = data.match(/<p>/);
    return imageURL;
  }

  function getTestDiv(htmlString) {
    let textVal = null;
    const searchTerm = `\"/></p>`;
    const imgclose = htmlString.indexOf(searchTerm);
    const elements = htmlString.slice(14, imgclose);
    textVal = elements;

    // console.log(textVal);
    return textVal;
  }

  // .getElementsByTagName('p')[0]

  const data = useStaticQuery(graphql`
    query MovieCardPage {
      allFeedLetterboxd(limit: 3) {
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

  function htmlDecode(input) {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  }

  // const image = getImage(getTestDiv(movie.node.content));

  return (
    <>
      {data.allFeedLetterboxd.edges && (
        <Box
          backgroundColor="gray.100"
          p="4"
          borderRadius="16"
          gridColumn="span 2"
        >
          <Text m="0">I'm watching to</Text>
          <SimpleGrid columns={3} spacing={10}>
            {data.allFeedLetterboxd.edges.map((movie) => (
              <Box key={movie.node.id}>
                <Link to={movie.node.link} target="_blank">
                  {/* {console.log(getTestDiv(movie.node.content))} */}
                  {/* <Box
                    dangerouslySetInnerHTML={{
                      __html: getTestDiv(movie.node.content),
                    }}
                  /> */}
                  <img
                    src={getTestDiv(movie.node.content)}
                    alt={movie.node.title}
                  />
                  <Text>{movie.node.title}</Text>
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};

export default MovieCard;
