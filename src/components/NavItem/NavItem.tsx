'use client';

import { Link } from '@chakra-ui/next-js';
import { PropsWithChildren } from 'react';

export function NavItem({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Link flex={1} color="grey" fontSize="medium" p={2.5} transition={'0.6s'} borderRadius="5%" _hover={{ textDecoration: 'none', background: '#eacfbf73', color: 'black' }} href={href}>
      {typeof children === 'string' ? children.toUpperCase() : children}
    </Link>
  );
}
