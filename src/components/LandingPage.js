import { Box, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';

import join from "../assets/join.png"
import Categories from './Categories';
import ExpertiseAndTrust from './ExpertiseAndTrust';
import FindTalent from './FindTalent';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Stack px={{xs: 1, sm: 2, md: 8, lg: 10}}>
      <Box px={{xs: 2, sm: 6, md: 0, lg: 0}} mt={{xs: 3, sm: 3, md: 1}}  sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'column', md: 'row'}}}>
        <Box>
          <Typography sx={{fontSize: {xs: 50, sm: 50, md: 80}}} variant='h1' fontWeight={600} color={'primary'} fontFamily={"Rza"}>
            How work <br />
            should work
          </Typography>
          <Typography paragraph variant='p' sx={{fontSize: {xs: '18px', sm: '18px', md: '24px'}}} fontFamily={"Helvetica Neue"} color={'secondary'}>
            <span>Forget the old rules. You can have the</span><br className='d-lg-none d-sm-block'/>
            <span> best people.<br className='d-lg-none d-md-block d-sm-block d-none' /> Right now. Right here.</span>
          </Typography>
          <Button variant='contained' sx={{borderRadius: 50, marginTop: 2}}>Get Started</Button>
          <Typography mt={2} color={'secondary'} variant='h6'>Trusted by</Typography>
          <Stack spacing={6} direction="row" useFlexGap flexWrap="wrap">
            <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/microsoft.svg" alt='microsoft' />
            <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/airbnb.svg" alt="airbnb" />
            <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/bissell.svg" alt="bissell" />
          </Stack>
        </Box>
        <Box sx={{flex: 1, textAlign: 'end', display: {xs: 'none', sm: 'none', md: 'block'}}}>
          <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_230,f_auto,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg" alt="right-circle" />
        </Box>
      </Box>
      <Box mt={4} sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'column', md: 'row'}}}>
        <img className='img-block' src={join} alt='gif' />
        <Box sx={{display: 'flex', flex: 1, flexDirection: 'column', padding: {xs: 1, sm: 1, md: 5}, gap: 3}}>
          <Typography variant='h4' sx={{fontSize: {md: 48}}}  fontWeight={700} fontFamily={'Rza'}>Up your work game, it's free</Typography>
          <Stack display={'flex'} flexDirection={'row'} variant='h6'>
            <EditCalendarOutlinedIcon />
            <Typography sx={{lineHeight: 1, marginLeft: 2}} variant='h6'>No cost to join
              <br />
              <span style={{fontSize: 14, fontWeight: 300}}>Register and browse professionals, explore projects, or even book a consultation.</span>
            </Typography>
          </Stack>
          <Stack display={'flex'} flexDirection={'row'} variant='h6'>
            <PushPinOutlinedIcon />
            <Typography sx={{lineHeight: 1, marginLeft: 2}} variant='h6'>Post a job and hire top talent
              <br />
              <span style={{fontSize: 14, fontWeight: 300}}>Finding talent doesn’t have to be a chore. Post a job or we can search for you!</span>
            </Typography>
          </Stack>
          <Stack display={'flex'} flexDirection={'row'} variant='h6'>
            <LocalPoliceOutlinedIcon />
            <Typography sx={{lineHeight: 1, marginLeft: 2}} variant='h6'>Work with the best—without breaking the bank
              <br />
              <span style={{fontSize: 14, fontWeight: 300}}>Upwork makes it affordable to up your work and take advantage of low transaction rates.</span>
            </Typography>
          </Stack>
          <Stack sx={{justifyContent: {xs: 'center', sm: 'center', md: 'start'}}} display={'flex'} flexDirection={'row'} gap={3}>
            <Button sx={{borderRadius: 50, display: {xs: 'none', sm: 'none', md: 'block'}}} variant='contained' onClick={()=> navigate('/signup')}>Sign up for free</Button>
            <Button sx={{borderRadius: 50, border: 2, width: {xs: "100%", sm: '100%', md: 'auto'}}} variant='outlined'>Lear how to hire</Button>
          </Stack>
        </Box>  
      </Box>

      <Categories />
      <ExpertiseAndTrust />
      <FindTalent />
    </Stack>
  )
}

export default LandingPage