'use client';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { NavMenu } from '../NavMenu';
import { NavItem } from '../NavItem';

const MY_STORY_ITEMS = [
  { label: 'My SNA Story', href: '/my-sna-story' },
  { label: 'Contact Me', href: '/contact-me' },
];

const SNA_RESOURCE_HUB_ITEMS = [{ label: 'SNA Training', href: '/sna-training' }];

export function Navbar() {
  return (
    <Box position="sticky" top={0} as="nav" bg="brand.background" mb={4} borderBottom={'solid 0.5px grey'}>
      <Flex as="ul" justify="center" align="center" gap={24} mx={2} minHeight={8} p={4}>
        <Box as="li">
          <NavItem href="/">HOME</NavItem>
        </Box>
        <Box as="li">
          <NavMenu buttonLabel="MY STORY" items={MY_STORY_ITEMS} />
        </Box>
        <Box as="li">
          <NavItem href="/">WELLNESS</NavItem>
        </Box>
        <Box as="li">
          <NavMenu buttonLabel="SNA TRAINING" items={SNA_RESOURCE_HUB_ITEMS} />
        </Box>
        <Box as="li">
          <NavItem href="./">SNA RESOURCE HUB</NavItem>
        </Box>
        <Box as="li">
          <NavItem href="./">HANDBOOK</NavItem>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
