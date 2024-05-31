'use client';

import { background, ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { extendTheme } from '@chakra-ui/react';

const font = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: font,
        fontWeight: 'lighter',
        background: '#FEFEFA',
      },
    },
  },
  fonts: {
    body: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    heading: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
  },

  colors: {
    brand: {
      main: '#FEFEFA',
      green: '#758467',
      // ...
      100: '#FEFEFA',
    },
  },
});

export function Providers({ children }: PropsWithChildren) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
