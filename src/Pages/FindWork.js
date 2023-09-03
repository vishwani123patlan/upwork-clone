import React from 'react';
import { Box } from '@mui/material';
import Wishes from '../components/Wishes';
import JobsList from '../components/JobsList';
import SideProfile from '../components/SideProfile';

function FindWork() {
  return (
    <Box mt={4} px={{xs: 1, sm: 1, md: 20}} sx={{display: 'flex', flexDirection: {xs: 'column-reverse', sm: 'column-reverse' , md: 'row'}, gap: 2}}>
      <Box sx={{flex: 1}}>
        <Wishes />
        <JobsList />
      </Box>
      <Box sx={{width: {xs: "100%", sm: '100%', md: "300px"}}}>
        <SideProfile />
      </Box>
    </Box>
  )
}

export default FindWork