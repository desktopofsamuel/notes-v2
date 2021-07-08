import React from 'react';
import Link from '@/components/gatsby-link';
import { IconButton } from '@chakra-ui/react';

type SocialIconType = {
  to: string;
  children: ReactNode;
};

const SocialIcon: React.FC<SocialIconType> = ({ children, to }) => (
  <Link to={to}>
    <IconButton
      width="4"
      variant="outline"
      isRound
      colorScheme="gray"
      borderColor="gray.200"
      transition="ease-in-out"
      icon={children}
    />
  </Link>
);

export default SocialIcon;
