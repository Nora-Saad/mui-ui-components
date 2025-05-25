import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // Only apply background image on medium screens and up
        '@media (min-width:900px)': {
          backgroundImage: 'url(../assets/images/BinaryBg.webp)',
        },
      }}
    >
        <Container maxWidth="lg">{children}</Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
