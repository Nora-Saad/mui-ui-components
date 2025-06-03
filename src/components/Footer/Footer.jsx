import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="xl" >
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 3, textAlign: 'center' }}>
      <Typography variant="body2">© 2025 MyAgency. All rights reserved.</Typography>
        </Box>
        </Container>
      </Box>
  );
};

export default Footer;
