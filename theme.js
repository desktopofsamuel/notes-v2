import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
  config: {
    cssVarPrefix: 'dos',
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: 'Inter, Noto Sans HK, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
    heading:
      'Inter, Noto Sans HK, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
    mono: 'Menlo, IBM Plex Mono, monospace',
  },
  colors: {
    text: {
      100: 'lightgray',
      400: 'darkgray',
    },
    brand: {
      100: 'orange',
      400: 'red',
    },
    primary: {
      500: '#0077CC',
    },
    indigo: {
      100: '#EAF4FA',
      200: '#D6E8F6',
      300: '#B8CFE6',
      400: '#9AB2CD',
      500: '#748cad',
      600: '#546D94',
      700: '#3A507C',
      800: '#253764',
      900: '#162553',
    },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  components: {
    Button: {
      // variants: {
      //   solid: {
      //     backgroundColor: 'indigo.100',
      //   },
      // },
      // defaultProps: {
      //   colorScheme: 'indigo',
      // },
    },
    Text: {
      baseStyle: (props) => ({
        // color: mode('red.900', 'whiteAlpha.100')(props),
      }),
    },
    Link: {
      baseStyle: {
        // color: 'primary.500',
      },
    },
    VStack: {
      baseStyle: {
        align: 'flex-start',
        spacing: '8',
        width: '100%',
        color: 'primary.500',
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        // color: mode('red.400', 'whiteAlpha.900')(props),
      },
      p: {
        color: mode('gray.800', 'white.500')(props),
      },
      a: {
        // color: 'primary.500',
      },
      h1: {
        fontSize: 'xl',
        fontWeight: 'bold',
        mt: '8',
        mb: '4',
      },
      h2: {
        fontSizes: 'lg',
        fontWeight: 'bold',
        mt: '8',
        mb: '4',
      },
      h3: {
        fontSize: 'md',
        fontWeight: 'bold',
        mt: '8',
        mb: '4',
      },
      ul: {
        listStyle: 'square',
        my: '2',
      },
    }),
  },
});

export default customTheme;
