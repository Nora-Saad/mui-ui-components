import React, { useState } from 'react';
import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Typography, Paper } from '@mui/material';

const menuItems = [
  { id: 'service1', label: 'Teeth Whitening', content: 'This is content for Service 1.' },
  { id: 'service2', label: 'Root Canals', content: 'This is content for Service 2.' },
  { id: 'service3', label: 'Exams & Teeth Cleanings', content: 'This is content for Service 3.' },
  { id: 'service4', label: 'Implants', content: 'This is content for Service 3.' },
  { id: 'service5', label: 'Crowns', content: 'This is content for Service 3.' },
  { id: 'service6', label: 'Emergency Treatments', content: 'This is content for Service 3.' },
  
];

const ScrollableContentWithFixedMenu = () => {
  const [selected, setSelected] = useState(menuItems[0].id);

  const currentContent = menuItems.find(item => item.id === selected)?.content;

  return (
    <Box sx={{ display: 'flex', height: '500px' }}>
      {/* Fixed Menu */}
      <Box
        sx={{
          width: 200,
          borderRight: '1px solid #ccc',
          position: 'sticky',
          top: 0,
          alignSelf: 'flex-start',
          backgroundColor: '#f5f5f5',
        }}
      >
        <List>
          {menuItems.map(item => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={selected === item.id}
                onClick={() => setSelected(item.id)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Scrollable Content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          padding: 2,
          height: '500px',
        }}
      >
        <Paper elevation={2} sx={{ padding: 2 }}>
          <Typography variant="h6">{menuItems.find(item => item.id === selected)?.label}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {currentContent}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ScrollableContentWithFixedMenu;
