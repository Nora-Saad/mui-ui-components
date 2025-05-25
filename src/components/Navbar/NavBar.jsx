import { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../../Context/ThemeModeContext';

const NavBar = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        px: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="body2">Nav bar example</Typography>

      <IconButton onClick={toggleColorMode} color="inherit">
        {mode === 'light' ?
          <DarkModeIcon sx={{ color: '#2E92C3', width: 30, height: 30 }} />
          : <LightModeIcon sx={{ color: 'yellow', width: 30, height: 30 }} />}
      </IconButton>
    </Box>
  );
};

export default NavBar;
