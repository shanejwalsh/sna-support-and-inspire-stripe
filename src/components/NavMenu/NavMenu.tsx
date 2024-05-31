'use client';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { NavItem } from '../NavItem';

interface NavMenuProps {
  buttonLabel: string;
  items: Array<{ label: string; href: string }>;
}

export function NavMenu({ buttonLabel, items }: NavMenuProps) {
  return (
    <Menu matchWidth>
      <MenuButton
        rightIcon={<ChevronDownIcon boxSize={5} color="grey" fontWeight={500} />}
        as={Button}
        fontWeight={100}
        bg="unset"
        color="grey"
        fontSize="medium"
        p={2}
        transition={'0.6s'}
        borderRadius="5%"
        _hover={{ textDecoration: 'none', background: '#eacfbf73', color: 'black' }}
      >
        {buttonLabel}
      </MenuButton>
      <MenuList bg="brand.background" display="flex" flexDir="column" shadow="xl" border="solid 0.5px grey" p={2} w={'100px'}>
        {items.map((item) => (
          <MenuItem key={item.label} bg="brand.background" flex={1}>
            <NavItem href={item.href}>{item.label}</NavItem>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
