import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ minHeight: '80vh', py: 4 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
