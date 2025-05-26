import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../../Context/ThemeModeContext';

const NavBar = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: scrolled ? '0' : '18px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: scrolled ? '100%' : '80%',
        height:'80px',
        borderRadius: scrolled ? 0 : '100px',
        background: scrolled
          ? 'rgb(185, 188, 226)'
          : 'rgba(185, 188, 226, 0.5)',
        color: 'white',
        py: 1.5,
        px: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: scrolled ? 3 : 0,
        transition: 'all 0.3s ease-in-out',
        zIndex: 1300,
      }}
    >
      <Typography variant="body2">Nav bar example</Typography>

      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === 'light' ? (
          <DarkModeIcon sx={{ color: '#2E92C3', width: 30, height: 30 }} />
        ) : (
          <LightModeIcon sx={{ color: 'yellow', width: 30, height: 30 }} />
        )}
      </IconButton>
    </Box>
  );
};

export default NavBar;
