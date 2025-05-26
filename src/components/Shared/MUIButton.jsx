import { useState } from 'react';
import { Button as MuiButton } from '@mui/material';

const MUIButton = ({
  text,
  backgroundColor,
  textColor,
  borderColor,
  margin = "0",
  width = "auto",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MuiButton
      variant="outlined"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
      sx={{
        padding: '14px 42px',
        border: '2px solid',
        borderRadius: '144px',
        fontSize: { xs: '14px', md: '16px' },
        fontFamily: 'Inter, sans-serif',
        cursor: 'pointer',
        margin: margin,
        width: width,
        backgroundColor: isHovered ? textColor : backgroundColor,
        color: isHovered ? backgroundColor : textColor,
        borderColor: isHovered ? backgroundColor : borderColor,
        boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
        transform: isHovered ? 'translateY(-2px)' : 'none',
        transition: 'all 0.6s ease',
        textTransform: 'none',
      }}
    >
      {text}
    </MuiButton>
  );
};

export default MUIButton;
