
import { Box, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import { Link } from 'react-router-dom';
import SmallSideCard from './SmallSideCard';
import AdditionalLinks from './AdditionalLinks';

import { smallSideCardData } from '../utils/constant';

function SideProfile() {
  const profileProgress = 48;
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, border: '1px solid #d7d7d7', borderRadius: 1}}>
        <img style={{borderRadius: 50, width: 80, height: 80}} src="https://www.upwork.com/profile-portraits/c1i4-NjuQwoG5z9vyVx_pCZUPEUzafAA0KoQ8t_4eBbeJE03rTqm2QV2e9mroKXujl" alt="my profile" />
        <Link style={{color: '#14A800', "&hover": {color: '#14A800'}}}><Typography color={'primary'}>Vishwani Patlan</Typography></Link>
        <Box sx={{overflow: "hidden", textOverflow: "ellipsis", width: '11rem'}}>
          <Typography noWrap paragraph>
          I have been trying to get in touch with you to see if there is a fit between your company’s Hrms goals and our value proposition. How about us sitting for an online meeting to outmaneuver the competition and understand our areas of growth!
          You can also have a glance at the Modules overview and see how Keka can streamline the process seamlessly.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{fontSize: 16}} paragraph color={'primary'}>Complete Your Profile</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" value={profileProgress} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography sx={{fontSize: 12}} variant="body2" color="text.secondary">{`${Math.round(
                profileProgress,
              )}%`}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {
        smallSideCardData.map((smallCard) => (
          <SmallSideCard heading={smallCard.heading} description={smallCard.description} logo={smallCard.logo} />
        ))
      }
      <AdditionalLinks />
    </Box>
  )
}

export default SideProfile