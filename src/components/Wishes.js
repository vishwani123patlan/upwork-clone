import React from 'react';
import { Box, Typography } from '@mui/material';
import { formatDate, getGreeting } from '../utils/utils';

function Wishes() {
  const date = new Date();
  return (
    <Box sx={{display: {xs: 'none', sm: 'none', md: 'flex'}, justifyContent: 'space-between', alignItems: 'center', border: "1px solid #d7d7d7", borderRadius: 1, padding: 2}}>
      <Box>
        <Typography variant='h5'>{formatDate(date)}</Typography>
        <Typography fontWeight={530} variant='h3' fontFamily={'Rza'}>{getGreeting()} Vishwani P</Typography>
      </Box>
      <img style={{width: 150}} src='https://growthdot.com/images/growthdot/email-tracking/hero-image.svg' alt='hero' />
    </Box>
  )
}

export default Wishes