import React from 'react';
import Link from '@/components/gatsby-link';
import { Circle } from '@chakra-ui/layout';

type SocialIconType = {
  to: string;
};

const SocialIcon: React.FC<SocialIconType> = ({ children, to }) => (
  <Link to={to}>
    <Circle
      m="4px"
      size="36px"
      borderWidth="1px"
      borderColor="gray.200"
      transition="ease-in-out"
      _hover={{ color: `red.400` }}
    >
      {children}
    </Circle>
  </Link>
);

export default SocialIcon;
