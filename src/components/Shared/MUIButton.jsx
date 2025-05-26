// MUIButton.js
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
  
  return (
    <MuiButton
      variant="outlined"
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
        backgroundColor: backgroundColor,
        color: textColor,
        borderColor: borderColor,
        transition: 'all 0.3s ease',
        textTransform: 'none',

        '&:hover': {
          backgroundColor: textColor,
          color: backgroundColor,
          borderColor: backgroundColor,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      {text}
    </MuiButton>
  );
};

export default MUIButton;
