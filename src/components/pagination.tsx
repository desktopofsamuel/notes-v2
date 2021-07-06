import React from 'react';
import { Flex, Button, Link } from '@chakra-ui/react';

type Props = {
  prevPagePath: string;
  nextPagePath: string;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}: Props) => {
  return (
    <Flex justifyContent="space-between">
      <Link href={hasPrevPage ? prevPagePath : null}>
        <Button variant={hasPrevPage ? 'solid' : 'disabled'}>← PREV</Button>
      </Link>
      <Link href={hasNextPage ? nextPagePath : null}>
        <Button variant={hasNextPage ? 'solid' : 'disabled'}>→ NEXT</Button>
      </Link>
    </Flex>
  );
};

export default Pagination;
