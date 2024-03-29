import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'var(--font-lato), -apple-system, Arial, sans-serif',
    heading: 'var(--font-lato), -apple-system, Arial, sans-serif',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'var(--chakra-colors-gray-50)',
      },
    }),
  },
});
