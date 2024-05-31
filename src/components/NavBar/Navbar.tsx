'use client';
import { Box, Button, Divider, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import React, { PropsWithChildren } from 'react';

import { ChevronDownIcon } from '@chakra-ui/icons';

export function Navbar() {
  return (
    <Box position="sticky" top={0} as="nav" bg="brand.main" mb={4} borderBottom={'solid 0.5px grey'}>
      <Flex as="ul" justify="center" align="center" gap="6em" mx={2} minHeight={8} p={4}>
        <Box as="li">
          <NavItem href="/">HOME</NavItem>
        </Box>
        <Box as="li">
          <Menu>
            <MenuButton as={Button} fontWeight={100} bg="unset" color="grey" fontSize="medium" p={2} transition={'0.6s'} borderRadius="5%" _hover={{ textDecoration: 'none', background: '#eacfbf73', color: 'black' }} rightIcon={<ChevronDownIcon />}>
              MY STORY
            </MenuButton>
            <MenuList bg="brand.background">
              <MenuItem>My SNA Story</MenuItem>
              <MenuItem>Contact Me</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box as="li">
          <NavItem href="./">SNA TRAINING</NavItem>
        </Box>
        <Box as="li">
          <NavItem href="./">SNA RESOURCE HUB</NavItem>
        </Box>
        <Box as="li">
          <NavItem href="./">HANDBOOK</NavItem>
        </Box>
      </Flex>
      {/* <Divider bg="gray" /> */}
    </Box>
  );
}

export default Navbar;

function NavItem({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Link color="grey" fontSize="medium" p={2} transition={'0.6s'} borderRadius="5%" _hover={{ textDecoration: 'none', background: '#eacfbf73', color: 'black' }} href={href}>
      {typeof children === 'string' ? children.toUpperCase() : children}
    </Link>
  );
}
