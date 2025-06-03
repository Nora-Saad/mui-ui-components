import React, { useContext, useEffect, useState } from 'react';
import {
  Box, Button, Menu, MenuItem, Typography, Divider, IconButton,
  Drawer, List, ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails,
  useMediaQuery,Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../Context/ThemeModeContext';
import CloseIcon from '@mui/icons-material/Close';

const BusinessIcon = React.lazy(() => import('../../assets/images/Navbar-icons/BusinessIcon'));
const DentalIcon = React.lazy(() => import('../../assets/images/Navbar-icons/DentalIcon'));
const ECommerceIcon = React.lazy(() => import('../../assets/images/Navbar-icons/ECommerceIcon'));
const MobilIcon = React.lazy(() => import('../../assets/images/Navbar-icons/MobilIcon'));
const CustomSoftwareIcon = React.lazy(() => import('../../assets/images/Navbar-icons/CustomSoftwareIcon'));

const NavBar = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const [scrolled, setScrolled] = useState(false);
  const [anchorServices, setAnchorServices] = useState(null);
  const [anchorPricing, setAnchorPricing] = useState(null);
  

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
  const handleMenuClose = (setter) => () => setter(null);
 

  return (
    <Box component="nav"
    sx={{
      position: 'fixed',
      top: scrolled ? '0' : '18px',
      left: '50%',
      transform: 'translateX(-50%)',
      width:  '100%',
      zIndex: 100,
      transition: 'all 0.3s ease-in-out',
      background: scrolled
      ? 'rgb(185, 188, 226)'
      : 'transparent',
    }}
    >
      <Container maxWidth='xl'  sx={{ px: 0 }} >
      <Box
          sx={{
            width: scrolled ? '100%' :  '95%',
            mx:  'auto',
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

        {isMobile ? (
        <>
           <Box display="flex" alignItems="center" gap={1}>
            <IconButton onClick={toggleColorMode} color="inherit">
              {mode === 'light' ? (
                <DarkModeIcon sx={{ color: '#2E92C3', width: 30, height: 30 }} />
              ) : (
                <LightModeIcon sx={{ color: 'yellow', width: 30, height: 30 }} />
              )}
            </IconButton>

            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile Drawer */}
          <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
              <Box sx={{ width: 250, backgroundColor: 'rgb(202, 205, 243)', height: '100%', zIndex: '200' }}>
                
                 {/* Close Button */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2,
                    borderBottom: '1px solid #ccc',
                  }}
                >
                  <IconButton onClick={toggleDrawer}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                
              <List>

                {/* Services Accordion */}
                <Accordion  disableGutters sx={{ backgroundColor: 'rgb(202, 205, 243)', boxShadow: 'none',  borderBottom: 'none',
    '&:before': {
      display: 'none',
    }, }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Services</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle2">Web Development</Typography>
                    <ListItem button component={RouterLink} to="/" disableGutters>
                      <ListItemIcon sx={{ minWidth: 20 }} ><BusinessIcon /></ListItemIcon>
                      <ListItemText primary="Business Websites" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/" disableGutters>
                      <ListItemIcon sx={{ minWidth: 20 }}><DentalIcon /></ListItemIcon>
                      <ListItemText primary="Dental Websites" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/" disableGutters>
                      <ListItemIcon sx={{ minWidth: 20 }}><ECommerceIcon /></ListItemIcon>
                      <ListItemText primary="ECommerce Websites" />
                    </ListItem>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="subtitle2">Software Development</Typography>
                    <ListItem button component={RouterLink} to="/" disableGutters>
                      <ListItemIcon sx={{ minWidth: 20 }}><MobilIcon /></ListItemIcon>
                      <ListItemText primary="Mobile Development" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/" disableGutters>
                      <ListItemIcon sx={{ minWidth: 20 }}><CustomSoftwareIcon /></ListItemIcon>
                      <ListItemText primary="Custom Software Development" />
                    </ListItem>
                  </AccordionDetails>
                </Accordion>

                {/* Pricing Accordion */}
                <Accordion disableGutters sx={{ backgroundColor: 'rgb(202, 205, 243)', boxShadow: 'none',  borderBottom: 'none',
    '&:before': {
      display: 'none',
    }, }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Pricing</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle2">Web Development</Typography>
                    <ListItem button component={RouterLink} to="/" disableGutters>
                      <ListItemIcon sx={{ minWidth: 20 }}><BusinessIcon /></ListItemIcon>
                      <ListItemText primary="Business Packages" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/" disableGutters>
                      <ListItemIcon sx={{ minWidth: 20 }}><DentalIcon /></ListItemIcon>
                      <ListItemText primary="Dental Packages" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/" disableGutters>
                      <ListItemIcon sx={{ minWidth: 20 }}><ECommerceIcon /></ListItemIcon>
                      <ListItemText primary="ECommerce Packages" />
                    </ListItem>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="subtitle2">Software Development</Typography>
                    <ListItem button component={RouterLink} to="/" disableGutters>
                      <ListItemIcon sx={{ minWidth: 20 }}><MobilIcon /></ListItemIcon>
                      <ListItemText primary="Mobile Packages" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/" disableGutters>
                      <ListItemIcon sx={{ minWidth: 22 }}><CustomSoftwareIcon /></ListItemIcon>
                      <ListItemText primary="Custom Software Packages"   />
                    </ListItem>
                  </AccordionDetails>
                </Accordion>

                {/* Simple Links */}
                <ListItem button component={RouterLink} to="/blogs">
                  <ListItemText primary="Blogs" />
                </ListItem>
                <ListItem button component={RouterLink} to="/about">
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem button component={RouterLink} to="/contactus">
                  <ListItemText primary="Contact Us" />
                </ListItem>
                <ListItem button component="a" href="https://clients.alphaquasartech.com/login">
                  <ListItemText primary="Client Portal" />
                </ListItem>
              </List>
            </Box>
          </Drawer>
            </>
          ) : (
            <>
               {/* Desktop Menu */}
          <Box display="flex" alignItems="center" gap={2}>
         
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
         

          <Button component={RouterLink} to="/blogs" sx={{ whiteSpace: 'nowrap' }}>Blogs</Button>
          <Button component={RouterLink} to="/about" sx={{ whiteSpace: 'nowrap' }}>About Us</Button>
          <Button component={RouterLink} to="/contactus" sx={{ whiteSpace: 'nowrap' }}>Contact Us</Button>
          <Button href="https://clients.alphaquasartech.com/login" sx={{ whiteSpace: 'nowrap' }}>Client Portal</Button>
              </Box>
              <IconButton onClick={toggleColorMode} color="inherit">
              {mode === 'light' ? (
                <DarkModeIcon sx={{ color: '#2E92C3', width: 30, height: 30 }} />
              ) : (
                <LightModeIcon sx={{ color: 'yellow', width: 30, height: 30 }} />
              )}
            </IconButton>
          </>
          )}
       
      </Box>
        
      </Container>
      </Box>
    
  );
};

export default NavBar;
