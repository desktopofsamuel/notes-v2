import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import GatsbyLink from '@/components/gatsby-link';
import {
  Button,
  Box,
  Flex,
  Grid,
  Heading,
  VStack,
  SimpleGrid,
  useColorMode,
  mode,
  IconButton,
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
    <Grid
      as="aside"
      alignContent="flex-start"
      gap="10"
      gridTemplateColumns={{ base: 'auto auto', md: 'auto' }}
    >
      <Flex direction="column">
        {/* Bio */}
        <GatsbyLink to="/">
          <StaticImage
            src="../../static/profile.jpg"
            alt="Samuel W."
            placeholder="blurred"
            layout="fixed"
            width={75}
            height={75}
            style={{
              borderRadius: `50%`,
            }}
          />
        </GatsbyLink>
        {/* Author */}
        <Heading as="h1" fontSize="medium">
          Samuel W.
        </Heading>
        <Box dangerouslySetInnerHTML={{ __html: config.author.fullbio }} />
      </Flex>
      <Flex direction="column">
        {/* Menu  */}
        <VStack
          spacing="2"
          align="flex-start"
          alignItems={{ base: 'flex-end', md: 'flex-start' }}
        >
          {config.menu.map((item) => (
            <GatsbyLink to={item.path}>{item.label}</GatsbyLink>
          ))}
        </VStack>
        {/* Social */}
        <SimpleGrid
          spacingX="4"
          spacingY="2"
          columns={3}
          display={{ base: 'none', md: 'grid' }}
        >
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
        <IconButton
          width="4"
          aria-label="Switch Color Mode"
          variant="outline"
          onClick={toggleColorMode}
          isRound
          icon={colorMode === `light` ? <FaMoon /> : <FaSun />}
        />
      </Flex>
    </Grid>
  );
};

export default Sidebar;
