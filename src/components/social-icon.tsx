import React from 'react';
import Link from '@/components/gatsby-link';
import { IconButton } from '@chakra-ui/react';

type SocialIconType = {
  to: string;
  children: ReactNode;
  label: string;
};

const SocialIcon: React.FC<SocialIconType> = ({ children, to, label }) => (
  <Link to={to}>
    <IconButton
      width="4"
      variant="outline"
      isRound
      colorScheme="gray"
      borderColor="gray.200"
      transition="ease-in-out"
      icon={children}
      aria-label={label}
    />
  </Link>
);

export default SocialIcon;
