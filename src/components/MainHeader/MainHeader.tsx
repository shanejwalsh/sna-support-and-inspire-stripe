import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import React from 'react';

export function MainHeader() {
  return (
    <Box as="header">
      <Flex p={3} justifyContent="center" bg="brand.green" color="white">
        <Text size="md" as="h4" fontSize={'1em'} color="white">
          Inspiring Every Special Needs Assistant: Find Support, Resources, and Community Here.
        </Text>
      </Flex>
      <Flex justifyContent="center" p={8}>
        <Img minH={'192px'} w="12em" src="https://snasupportandinspire.ie/img/5.png" />
      </Flex>
    </Box>
  );
}
