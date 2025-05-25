import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
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
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          font-size: 16px;
        }
        @media (max-width: 1210px) {
          :root {
            font-size: 14px;
          }
        }
      `,
    },
  },
});

// Make font sizes responsive based on screen size
theme = responsiveFontSizes(theme);

export default theme;
