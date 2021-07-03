import React from 'react';
import { Box, Text, Heading, VStack, SimpleGrid } from '@chakra-ui/react';

const Sidebar: React.FC = () => (
  <aside>
    <Box>
      <Heading as="h1">Samuel W.</Heading>
      <Text>
        科技 | 設計 | 城市 UI/UX 設計師，喜愛攝影，漫遊城市的不同角落。
      </Text>
      <VStack>
        <Text>所有文章</Text>
        <Text>所有文章</Text>
        <Text>所有文章</Text>
        <Text>所有文章</Text>
      </VStack>
      <SimpleGrid>
        <Box>Twitter</Box>
        <Box>RSS</Box>
        <Box>Twitter</Box>
        <Box>Twitter</Box>
        <Box>Twitter</Box>
        <Box>Twitter</Box>
      </SimpleGrid>
    </Box>
  </aside>
);

export default Sidebar;
