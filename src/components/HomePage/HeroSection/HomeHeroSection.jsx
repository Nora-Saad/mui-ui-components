import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeroBinaryImage from './HeroBinaryImage';
import GradientBackGroundImage from '../../../assets/images/Hero-gradient-background.svg';
import MUIButton from '../../Shared/MUIButton';

const HomeHeroSection = () => {
  return (
      <Box
        sx={{
        position: 'relative', 
        py: 17,
        px: "7%",
      }}
      >
          
      <Box
        sx={{
          display: 'flex',
          flexDirection:  'column' ,
          minWidth: '50%',         
          maxWidth:{sm:'80%', md:'550px', lg:'600px'}
        }}>
        <Typography variant="gradientSpan" > WE MAKE THE BEST IT SOLUTIONS</Typography>
        <Typography variant="h1" >Web, Mobile and Custom Software Development Agency</Typography>
        <Typography variant="body1" sx={{ mt: 4 }}>
        Introduce your business effectively to the world, streamline your
        processes, and boost revenue through our cost-effective services.
        </Typography>
       
      </Box>
      <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: 2,
      alignItems: 'center',
      justifyContent: { xs: 'center', sm: 'flex-start' },
      mt: 5,
    }}
  >
          <MUIButton
          text="Schedule a call"
          backgroundColor="#655DBB"
          textColor="white"
          borderColor="#655DBB"
          width={{ xs: '80%', sm: 'auto' }}
          />

        <MUIButton
          text="View Portfolio"
          backgroundColor="white"
          textColor="black"
          borderColor="black"
          width={{ xs: '80%', sm: 'auto' }}
          
        />
        </Box>
      <Box sx={{
        position: 'absolute',
        right: 0,
        top:0,
        backgroundImage: `url(${GradientBackGroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: 'cover',
        minWidth: 300,
        width:'100%',
        height: 'auto',
        overflow: 'hidden',
        zIndex:'-1'
    }}>
      <HeroBinaryImage/>
      </Box>
    </Box>
  );
};

export default HomeHeroSection;
