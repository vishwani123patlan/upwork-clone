import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

function FindTalent() {
  return (
    <Box>
      <Stack sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'column', md: 'row'}, marginTop: {xs: 4, sm: 6, md: 8}, borderRadius: 20, height: {md: 550}}}>
      <img className='side-image-talent' src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//q_auto,dpr_2.0,f_auto/brontes/for-talents/find-great-work@2x.jpg" />
        <Box sx={{display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#1f57c3', borderRadius: {md: "0px 8px 8px 0px"}, padding: 3, paddingBottom: {xs: 3, sm: 3, md: 5}}} gap={3} >
          <Typography sx={{lineHeight: 0.97, fontSize: 64}} mt={2} variant='h2' color={'white'} fontFamily={'Rzo'} >
            Find great <br />
            Work 
          </Typography>
          <Typography paragraph color={'white'}>
          Meet clients you’re excited to work with and take
          your career or business to new heights.
          </Typography>
          <hr className='find-talent-hr' />
          <Box sx={{display: 'flex', flexDirection: 'row', gap: 3}}>
            <Typography paragraph color={'white'}>
              Find opportunities for every stage of your freelance career
            </Typography>
            <Typography paragraph color={'white'}>
              Control when, where, and how you work
            </Typography>
            <Typography paragraph color={'white'}>
              Explore different ways to earn
            </Typography>
          </Box>
          <Button className='find-talent-button' variant='contained' sx={{width: {md: 200}, color: "#1f57c3", backgroundColor: 'white', borderRadius: 50, "&:hover": {backgroundColor: "white", color: '#1f57c3'} }}>Find opportunities</Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default FindTalent