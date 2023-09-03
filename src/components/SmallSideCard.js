import { Box, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SmallSideCard({heading, description, logo}) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, padding: 2, border: '1px solid #d7d7d7', borderRadius: 1, backgroundColor: '#e3f9ec'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography fontSize={14} fontWeight={'bold'}>{heading}</Typography>
        <ArrowForwardIcon />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography paragraph sx={{fontSize: 11}}>{description}</Typography>
        <img src={logo} alt='small card' style={{width: 40}} />
      </Box>
    </Box>
  )
}

export default SmallSideCard