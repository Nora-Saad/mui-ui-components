import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 3, textAlign: 'center' }}>
      <Typography variant="body2">© 2025 MyAgency. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
