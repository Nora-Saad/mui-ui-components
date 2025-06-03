import React, { useState } from 'react';
import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Typography, Paper } from '@mui/material';
import CrownImg from '../../../assets/images/Services/Dental Crown Blue.svg';
import EmergencyImg from '../../../assets/images/Services/Emergency Blue.svg';
import ExamsImg from '../../../assets/images/Services/Exams Blue.svg';
import RootImg from '../../../assets/images/Services/Root Canal Blue.svg';
import ImplantImg from '../../../assets/images/Services/implant Blue.svg';
import whiteningImg from '../../../assets/images/Services/whitening Blue.svg';


const menuItems = [
    {
      id: 'service1',
      label: 'Teeth Whitening',
      image: whiteningImg,
      paragraphs: [
        'Teeth whitening is a popular cosmetic dental procedure that effectively removes stains caused by coffee, tea, wine, smoking, and aging. Using safe and approved bleaching agents, we can restore your teeth to a brighter and more youthful appearance.',
          'Our in-office whitening treatments produce noticeable results in just one session, and we also offer take-home kits for ongoing maintenance. You’ll leave with a smile that’s not only whiter but also more confident.',
        'Teeth whitening is a popular cosmetic dental procedure that effectively removes stains caused by coffee, tea, wine, smoking, and aging. Using safe and approved bleaching agents, we can restore your teeth to a brighter and more youthful appearance.',
        'Our in-office whitening treatments produce noticeable results in just one session, and we also offer take-home kits for ongoing maintenance. You’ll leave with a smile that’s not only whiter but also more confident.',
      ]
    },
    {
      id: 'service2',
      label: 'Root Canals',
      image: RootImg,
      paragraphs: [
        'Root canals are necessary when the pulp inside your tooth becomes inflamed or infected, often due to deep decay or trauma. This treatment allows us to clean, disinfect, and seal the tooth, saving it from extraction.',
          'Thanks to modern technology and local anesthetics, the procedure is virtually painless and highly successful. Our goal is to preserve your natural tooth and relieve you from pain and infection.',
        'Root canals are necessary when the pulp inside your tooth becomes inflamed or infected, often due to deep decay or trauma. This treatment allows us to clean, disinfect, and seal the tooth, saving it from extraction.',
          'Thanks to modern technology and local anesthetics, the procedure is virtually painless and highly successful. Our goal is to preserve your natural tooth and relieve you from pain and infection.',
        'Root canals are necessary when the pulp inside your tooth becomes inflamed or infected, often due to deep decay or trauma. This treatment allows us to clean, disinfect, and seal the tooth, saving it from extraction.',
          'Thanks to modern technology and local anesthetics, the procedure is virtually painless and highly successful. Our goal is to preserve your natural tooth and relieve you from pain and infection.',
        'Root canals are necessary when the pulp inside your tooth becomes inflamed or infected, often due to deep decay or trauma. This treatment allows us to clean, disinfect, and seal the tooth, saving it from extraction.',
          'Thanks to modern technology and local anesthetics, the procedure is virtually painless and highly successful. Our goal is to preserve your natural tooth and relieve you from pain and infection.',
        'Root canals are necessary when the pulp inside your tooth becomes inflamed or infected, often due to deep decay or trauma. This treatment allows us to clean, disinfect, and seal the tooth, saving it from extraction.',
          'Thanks to modern technology and local anesthetics, the procedure is virtually painless and highly successful. Our goal is to preserve your natural tooth and relieve you from pain and infection.',
        'Root canals are necessary when the pulp inside your tooth becomes inflamed or infected, often due to deep decay or trauma. This treatment allows us to clean, disinfect, and seal the tooth, saving it from extraction.',
          'Thanks to modern technology and local anesthetics, the procedure is virtually painless and highly successful. Our goal is to preserve your natural tooth and relieve you from pain and infection.',
        'Root canals are necessary when the pulp inside your tooth becomes inflamed or infected, often due to deep decay or trauma. This treatment allows us to clean, disinfect, and seal the tooth, saving it from extraction.',
          'Thanks to modern technology and local anesthetics, the procedure is virtually painless and highly successful. Our goal is to preserve your natural tooth and relieve you from pain and infection.',
        'Root canals are necessary when the pulp inside your tooth becomes inflamed or infected, often due to deep decay or trauma. This treatment allows us to clean, disinfect, and seal the tooth, saving it from extraction.',
        'Thanks to modern technology and local anesthetics, the procedure is virtually painless and highly successful. Our goal is to preserve your natural tooth and relieve you from pain and infection.',
      ]
    },
    {
      id: 'service3',
      label: 'Exams & Teeth Cleanings',
      image: ExamsImg,
      paragraphs: [
        'Routine dental exams and professional cleanings are vital in preventing cavities, gum disease, and other oral health issues. During each visit, we examine your teeth and gums for signs of decay, plaque buildup, or abnormalities.',
        'Our experienced hygienists use advanced tools to gently remove tartar and polish your teeth, leaving your mouth clean and refreshed. Preventive care is the best investment in your long-term dental health.'
      ]
    },
    {
      id: 'service4',
      label: 'Implants',
      image: ImplantImg,
      paragraphs: [
        'Dental implants are the most reliable and natural-looking solution for missing teeth. They are titanium posts surgically placed into the jawbone, acting as artificial roots for crowns, bridges, or dentures.',
        'Implants promote jawbone health and facial structure, improving function and aesthetics. With proper care, they can last a lifetime and offer unmatched stability and comfort.',
        'Dental implants are the most reliable and natural-looking solution for missing teeth. They are titanium posts surgically placed into the jawbone, acting as artificial roots for crowns, bridges, or dentures.',
        'Implants promote jawbone health and facial structure, improving function and aesthetics. With proper care, they can last a lifetime and offer unmatched stability and comfort.',
     'Dental implants are the most reliable and natural-looking solution for missing teeth. They are titanium posts surgically placed into the jawbone, acting as artificial roots for crowns, bridges, or dentures.',
        'Implants promote jawbone health and facial structure, improving function and aesthetics. With proper care, they can last a lifetime and offer unmatched stability and comfort.',
        'Dental implants are the most reliable and natural-looking solution for missing teeth. They are titanium posts surgically placed into the jawbone, acting as artificial roots for crowns, bridges, or dentures.',
        'Implants promote jawbone health and facial structure, improving function and aesthetics. With proper care, they can last a lifetime and offer unmatched stability and comfort.',
      ]
    },
    {
      id: 'service5',
      label: 'Crowns',
      image: CrownImg,
      paragraphs: [
        'Crowns are custom-made caps that cover and protect damaged or decayed teeth. They restore the shape, size, and strength of the tooth while improving its appearance.',
          'Whether you\'re dealing with cracks, large fillings, or post-root canal care, our high-quality ceramic and porcelain crowns provide a seamless and durable solution that mimics your natural tooth.',
        'Crowns are custom-made caps that cover and protect damaged or decayed teeth. They restore the shape, size, and strength of the tooth while improving its appearance.',
        'Whether you\'re dealing with cracks, large fillings, or post-root canal care, our high-quality ceramic and porcelain crowns provide a seamless and durable solution that mimics your natural tooth.',
      'Crowns are custom-made caps that cover and protect damaged or decayed teeth. They restore the shape, size, and strength of the tooth while improving its appearance.',
          'Whether you\'re dealing with cracks, large fillings, or post-root canal care, our high-quality ceramic and porcelain crowns provide a seamless and durable solution that mimics your natural tooth.',
        'Crowns are custom-made caps that cover and protect damaged or decayed teeth. They restore the shape, size, and strength of the tooth while improving its appearance.',
        'Whether you\'re dealing with cracks, large fillings, or post-root canal care, our high-quality ceramic and porcelain crowns provide a seamless and durable solution that mimics your natural tooth.',
        'Crowns are custom-made caps that cover and protect damaged or decayed teeth. They restore the shape, size, and strength of the tooth while improving its appearance.',
        'Whether you\'re dealing with cracks, large fillings, or post-root canal care, our high-quality ceramic and porcelain crowns provide a seamless and durable solution that mimics your natural tooth.',
      'Crowns are custom-made caps that cover and protect damaged or decayed teeth. They restore the shape, size, and strength of the tooth while improving its appearance.',
      'Whether you\'re dealing with cracks, large fillings, or post-root canal care, our high-quality ceramic and porcelain crowns provide a seamless and durable solution that mimics your natural tooth.',
    'Crowns are custom-made caps that cover and protect damaged or decayed teeth. They restore the shape, size, and strength of the tooth while improving its appearance.',
        'Whether you\'re dealing with cracks, large fillings, or post-root canal care, our high-quality ceramic and porcelain crowns provide a seamless and durable solution that mimics your natural tooth.',
      'Crowns are custom-made caps that cover and protect damaged or decayed teeth. They restore the shape, size, and strength of the tooth while improving its appearance.',
      'Whether you\'re dealing with cracks, large fillings, or post-root canal care, our high-quality ceramic and porcelain crowns provide a seamless and durable solution that mimics your natural tooth.',
      ]
    },
    {
      id: 'service6',
      label: 'Emergency Treatments',
      image: EmergencyImg,
      paragraphs: [
        'Dental emergencies like knocked-out teeth, severe toothaches, or broken restorations can happen unexpectedly and require immediate care. Our clinic prioritizes such cases to provide timely relief.',
        'We have the tools and expertise to manage urgent dental issues and minimize complications. If you’re in pain or discomfort, don’t hesitate to contact us—your smile is our emergency.'
      ]
    },
  ];
  
  

  const ScrollableContentWithFixedMenu = () => {
    const [selected, setSelected] = useState(menuItems[0].id);
  
    const selectedItem = menuItems.find(item => item.id === selected);
  
    return (

      <Box component="section" sx={{ padding: '50px' }}>
        <Box sx={{textAlign:"center"}}>
        <Typography variant="gradientSpan"   > Services</Typography>
        <Typography variant="h2"  >Check our Services</Typography>
        </Box>

      <Box sx={{ display: 'flex', height: '100%', backgroundColor:'#f9f9f9' }}>
        {/* Fixed Menu */}
        <Box
          sx={{
              width: 250,
            height: '100%',
            borderRight: '1px solid #ccc',
            position: 'sticky',
            top: 0,
            alignSelf: 'center',
           
          }}
        >
          <List>
  {menuItems.map((item, index) => (
    <ListItem
      key={item.id}
      disablePadding
      sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <ListItemButton
        selected={selected === item.id}
        onClick={() => setSelected(item.id)}
        sx={{ width: '100%', textAlign: 'center' }}
      >
        <ListItemText primary={item.label} />
      </ListItemButton>

      {/* Only show border if it's not the last item */}
      {index !== menuItems.length - 1 && (
        <Box
          sx={{
            width: '80%',
            height: '1px',
            backgroundColor: '#7D7BB7',
            alignSelf: 'center',
          }}
        />
      )}
    </ListItem>
  ))}
</List>

        </Box>
  
        {/* Scrollable Content */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            height: '500px',
          }}
        >
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              {selectedItem.label}
            </Typography>
  
            {/* Image */}
            {selectedItem.image && (
              <Box
                component="img"
                src={selectedItem.image}
                alt={selectedItem.label}
                sx={{ width: '50%', maxHeight: 200, objectFit: 'contain', mb: 2, borderRadius: 1 }}
              />
            )}
  
            {/* Paragraphs */}
            {selectedItem.paragraphs.map((text, index) => (
              <Typography key={index} variant="body1" >
                {text}
              </Typography>
            ))}
          </Paper>
        </Box>
      </Box>
      </Box>
    );
  };
  
  export default ScrollableContentWithFixedMenu;
