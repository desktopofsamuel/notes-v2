import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import GatsbyLink from '@/components/gatsby-link';
import {
  Button,
  Box,
  Heading,
  VStack,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';
import {
  FaTwitter,
  FaInstagram,
  FaMediumM,
  FaFigma,
  FaLinkedin,
  FaRss,
  FaEnvelope,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import SocialIcon from '@/components/social-icon';
import config from '../../config';

const Sidebar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack as="aside" align="flex-start" spacing="8">
      {/* Bio */}
      <GatsbyLink to="/">
        <StaticImage
          src="../../static/profile.jpg"
          alt="Samuel W."
          placeholder="blurred"
          layout="fixed"
          width={100}
          height={100}
          style={{
            borderRadius: `50%`,
          }}
        />
      </GatsbyLink>
      {/* Author */}
      <Heading as="h1" fontSize="medium">
        Samuel W.
      </Heading>
      <Box
        color="whiteAlpha.700"
        dangerouslySetInnerHTML={{ __html: config.author.fullbio }}
      />
      {/* Menu  */}
      <VStack spacing="2" align="flex-start">
        {config.menu.map((item) => (
          <GatsbyLink to={item.path}>{item.label}</GatsbyLink>
        ))}
      </VStack>
      {/* Social */}
      <SimpleGrid columns={3}>
        <SocialIcon to="https://twitter.com/desktopofsamuel">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon>
          <FaInstagram />
        </SocialIcon>
        <SocialIcon>
          <FaMediumM />
        </SocialIcon>
        <SocialIcon>
          <FaFigma />
        </SocialIcon>
        <SocialIcon>
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon>
          <FaRss />
        </SocialIcon>
        <SocialIcon>
          <FaEnvelope />
        </SocialIcon>
      </SimpleGrid>
      <Button
        colorScheme="teal"
        mr="4"
        fontWeight="regular"
        onClick={toggleColorMode}
      >
        {colorMode === `light` ? <FaMoon /> : <FaSun />}
      </Button>
    </VStack>
  );
};

export default Sidebar;
