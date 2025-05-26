import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const sharedTypography = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 16,
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  h1: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    lineHeight: 1.1,
    fontSize: '3.75rem',
  },
  h2: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    lineHeight: 1.3,
    fontSize: '2.625rem',
  },
  h3: {
    fontFamily: '"Cabin Condensed", sans-serif',
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: '2rem',
  },
  h4: {
    fontFamily: '"Cabin Condensed", sans-serif',
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: '1.5rem',
  },
  h5: {
    fontFamily: '"Cabin Condensed", sans-serif',
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: '1.2rem',
  },
  h6: {
    fontFamily: '"Cabin Condensed", sans-serif',
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: '0.9rem',
  },
  gradientSpan: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
    textTransform: 'uppercase',
    background: 'linear-gradient(270deg, #7D7BB7 28.51%, #2E92C3 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px'
  },
};

// LIGHT THEME
let lightTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
      specialBox: '#000000', // black box
    },
    custom: {
      whiteBoxText: '#ffffff',
      buttonPrimary: {
        background: '#655DBB',
        text: '#ffffff',
        border: '#655DBB',
      },
      buttonNeutral: {
        background: '#ffffff',
        text: '#000000',
        border: '#000000',
      },
    },
  },
  typography: sharedTypography,
});

// DARK THEME
let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
      specialBox: '#EBEEF1', // light gray box
    },
    custom: {
      whiteBoxText: '#000000',
      buttonPrimary: {
        background: '#655DBB',
        text: '#ffffff',
        border: '#655DBB',
      },
      buttonNeutral: {
        background: '#ffffff',
        text: '#000000',
        border: '#000000',
      },
    },
  },
  typography: sharedTypography,
});

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
