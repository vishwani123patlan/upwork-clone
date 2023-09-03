import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function AdditionalLinks() {
  return (
    <Box sx={{display: {xs: 'none', sm: 'none', md: 'flex'}, flexDirection: 'column', gap: 2, padding: 2, border: '1px solid #d7d7d7', borderRadius: 1}}>
      <Link style={{color: 'black', fontSize: 18, "&hover": {color: 'black'}}}>Talent Scout</Link>
      <Link style={{color: 'black', fontSize: 18, "&hover": {color: 'black'}}}>Upwork Academy</Link>
      <Link style={{color: 'black', fontSize: 18, "&hover": {color: 'black'}}}>Direct Contracts</Link>
      <Link style={{color: 'black', fontSize: 18, "&hover": {color: 'black'}}}>Get Paid</Link>
      <Link style={{color: 'black', fontSize: 18, "&hover": {color: 'black'}}}>Community</Link>
      <Link style={{color: 'black', fontSize: 18, "&hover": {color: 'black'}}}>Help Center</Link>
    </Box>
  )
}

export default AdditionalLinks