import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Flex, Text, Heading, VStack, SimpleGrid } from '@chakra-ui/react';
import {
  FaTwitter,
  FaInstagram,
  FaMediumM,
  FaFigma,
  FaLinkedin,
  FaRss,
  FaEnvelope,
} from 'react-icons/fa';
import SocialIcon from '@/components/social-icon';

const Sidebar: React.FC = () => (
  <aside>
    <VStack align="flex-start" spacing="8">
      <StaticImage
        src="../../static/profile.jpg"
        alt="Samuel W."
        placeholder="blurred"
        layout="fixed"
        width={100}
        height={100}
      />

      <Heading as="h1" size="sm">
        Samuel W.
      </Heading>
      <Text color="gray.700">
        科技 | 設計 | 城市 UI/UX 設計師，喜愛攝影，漫遊城市的不同角落。
      </Text>
      <Flex direction="column">
        <Text>所有文章</Text>
        <Text>2</Text>
        <Text>所有文章</Text>
        <Text>所有文章</Text>
      </Flex>
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
    </VStack>
  </aside>
);

export default Sidebar;
