import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../Context/ThemeModeContext';

const BusinessIcon = React.lazy(() => import('../../assets/images/Navbar-icons/BusinessIcon'));
const DentalIcon = React.lazy(() => import('../../assets/images/Navbar-icons/DentalIcon'));
const ECommerceIcon = React.lazy(() => import('../../assets/images/Navbar-icons/ECommerceIcon'));
const MobilIcon = React.lazy(() => import('../../assets/images/Navbar-icons/MobilIcon'));
const CustomSoftwareIcon = React.lazy(() => import('../../assets/images/Navbar-icons/CustomSoftwareIcon'));

const NavBar = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [scrolled, setScrolled] = useState(false);
  const [anchorServices, setAnchorServices] = useState(null);
  const [anchorPricing, setAnchorPricing] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
  const handleMenuClose = (setter) => () => setter(null);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (

      <Container
      maxWidth={scrolled ? false : 'xl'}
        disableGutters
        sx={{
          position: 'fixed',
          top: scrolled ? '0' : '18px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: scrolled ? '100%' : '100%',
          height: '80px',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 0,
          transition: 'all 0.3s ease-in-out',
          zIndex: 1300,
        }}
      >
        <Box
          sx={{
            width: scrolled ? '100%' : '90%',
            borderRadius: scrolled ? 0 : '100px',
            background: scrolled
              ? 'rgb(185, 188, 226)'
              : 'rgba(185, 188, 226, 0.5)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          px: 3,
            py:3,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Typography variant="body2">Logo</Typography>
          <Box display="flex" alignItems="center" gap={2}>
          {/* Desktop Menu */}
        
          <Button
            onClick={handleMenuOpen(setAnchorServices)}
            endIcon={<KeyboardArrowDownIcon />}
          >
              Services
            </Button>
            <Menu
              anchorEl={anchorServices}
              open={Boolean(anchorServices)}
              onClose={handleMenuClose(setAnchorServices)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: 'rgb(202, 205, 243)',
                  color: 'black',
                  '& .MuiMenuItem-root': {
                    '&:hover': {
                      backgroundColor: '#ffffff',
                      color: 'black',
                    },
                  },
                },
              },
            }}
          >
              <Typography variant="subtitle2" sx={{ pl: 2, pt: 1 }}>Web Development</Typography>
              <MenuItem component={RouterLink} to="/">
                <BusinessIcon />&nbsp;Business Websites
              </MenuItem>
              <MenuItem component={RouterLink} to="/">
                <DentalIcon />&nbsp;Dental Websites
              </MenuItem>
              <MenuItem component={RouterLink} to="/">
                <ECommerceIcon />&nbsp;ECommerce Websites
              </MenuItem>
              <Divider />
              <Typography variant="subtitle2" sx={{ pl: 2, pt: 1 }}>Software Development</Typography>
              <MenuItem component={RouterLink} to="/">
                <MobilIcon />&nbsp;Mobile Development
              </MenuItem>
              <MenuItem component={RouterLink} to="/">
               <CustomSoftwareIcon />&nbsp;Custom Software Development
              </MenuItem>
            </Menu>

            {/* PRICING MENU */}
            <Button
                onClick={handleMenuOpen(setAnchorPricing)}
                endIcon={<KeyboardArrowDownIcon />}
            >
              Pricing
            </Button>
            <Menu
              anchorEl={anchorPricing}
              open={Boolean(anchorPricing)}
              onClose={handleMenuClose(setAnchorPricing)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: 'rgb(202, 205, 243)',
                  color: 'black',
                  '& .MuiMenuItem-root': {
                    '&:hover': {
                      backgroundColor: '#ffffff',
                      color: 'black',
                    },
                  },
                },
              },
            }}
            >
              <Typography variant="subtitle2" sx={{ pl: 2, pt: 1 }}>Web Development</Typography>
              <MenuItem component={RouterLink} to="/">
                <BusinessIcon />&nbsp;Business Packages
              </MenuItem>
              <MenuItem component={RouterLink} to="/">
                <DentalIcon />&nbsp;Dental Packages
              </MenuItem>
              <MenuItem component={RouterLink} to="/">
                <ECommerceIcon />&nbsp;ECommerce Packages
              </MenuItem>
              <Divider />
              <Typography variant="subtitle2" sx={{ pl: 2, pt: 1 }}>Software Development</Typography>
              <MenuItem component={RouterLink} to="/">
                <MobilIcon />&nbsp;Mobile Packages
              </MenuItem>
              <MenuItem component={RouterLink} to="/">
                <CustomSoftwareIcon />&nbsp;Custom Software Packages
              </MenuItem>
            </Menu>
         

          <Button component={RouterLink} to="/blogs">Blogs</Button>
          <Button component={RouterLink} to="/about">About Us</Button>
          <Button component={RouterLink} to="/contactus">Contact Us</Button>
          <Button href="https://clients.alphaquasartech.com/login">Client Portal</Button>
        </Box>


          <IconButton onClick={toggleColorMode} color="inherit">
            {mode === 'light' ? (
              <DarkModeIcon sx={{ color: '#2E92C3', width: 30, height: 30 }} />
            ) : (
              <LightModeIcon sx={{ color: 'yellow', width: 30, height: 30 }} />
            )}
          </IconButton>
      </Box>
      </Container>
     
    
  );
};

export default NavBar;
