import React from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import WorkIcon from '@mui/icons-material/Work';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ExpertiseAndTrust() {
  return (
    <Box>
      {/* EXPTERTISE  */}
      <Stack sx={{display: 'flex', flexDirection: {xs: 'column-reverse', sm: 'column-reverse', md: 'row'}, marginTop: {xs: 4, sm: 6, md: 8}, borderRadius: 20}}>
        <Box sx={{display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#13544e', borderRadius: {md: "8px 0px 0px 8px"}, padding: 3, paddingBottom: {xs: 3, sm: 3, md: 5}}} gap={3} >
          <Typography variant='h6' color={'white'} >Enterprise Suite</Typography>
          <Typography sx={{lineHeight: 0.97, fontSize: 64}} mt={2} variant='h2' color={'white'} fontFamily={'Rzo'} >
            This is how <br />
            <span style={{color: '#90e6b3'}}>good companies <br />find good company.</span>
          </Typography>
          <Typography paragraph sx={{fontSize: 18}}  color={'white'}>Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.</Typography>
          
          <Stack display={'flex'} alignItems={'center'} flexDirection={'row'} variant='h6'>
            <KeyIcon style={{color: '#90e6b3'}} />
            <Typography color={'white'} sx={{lineHeight: 1, marginLeft: 2, fontSize: 18}}>Access expert talent to fill your skill gaps
            </Typography>
          </Stack>

          <Stack display={'flex'} alignItems={'center'} flexDirection={'row'} variant='h6'>
            <WorkIcon style={{color: '#90e6b3'}} />
            <Typography color={'white'} sx={{lineHeight: 1, marginLeft: 2, fontSize: 18}}>Control your workflow: hire, classify and pay your talent
            </Typography>
          </Stack>

          <Stack display={'flex'} alignItems={'center'} flexDirection={'row'} variant='h6'>
            <HeadphonesIcon style={{color: '#90e6b3'}} />
            <Typography color={'white'} sx={{lineHeight: 1, marginLeft: 2, fontSize: 18}}>Partner with Upwork for end-to-end support
            </Typography>
          </Stack>

          <Button sx={{backgroundColor: 'white', color: '#13544e', width: 230, borderRadius: 50, "&:hover": {backgroundColor: 'white', color: '#13544e'}}}>Learn More</Button>
        </Box>
        <img className='side-image' src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/enterprise-2023.jpg" alt='side-image' />
      </Stack>

      {/* TRUST  */}

      <Stack sx={{marginTop: {xs: 4, sm: 4, md: 8}, display: 'flex', flexDirection: {xs: 'column', sm: 'column', md: 'row'}, gap: 2}}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, flex: 1, background: "#ebebeb", borderRadius: '8px', padding: {xs: 2, sm: 2, md: 5}}}>
          <Typography fontFamily={'Rza,Rza-fallback'} variant='h2' sx={{fontSize: {xs: "42px", sm: "42px", md: "64px"}, lineHeight: 1, fontWeight: 600}}>
          Why businesses <br />
          turn to Upwork
          </Typography>

          <Stack display={'flex'} flexDirection={'row'}>
            <StarIcon fontSize='large' />
            <Typography sx={{lineHeight: .85, marginLeft: 2}} variant='h4'>Proof of quality
              <br />
              <span style={{fontSize: 14, fontWeight: 300, color: '#5e6d55'}}>Check any pro’s work samples, client reviews, and identity verification.</span>
            </Typography>
          </Stack>

          <Stack display={'flex'} flexDirection={'row'}>
            <MonetizationOnIcon fontSize='large' />
            <Typography sx={{lineHeight: .85, marginLeft: 2}} variant='h4'>No cost until you hire
              <br />
              <span style={{fontSize: 14, fontWeight: 300, color: '#5e6d55'}}>Interview potential fits for your job, negotiate rates, and only pay for work you approve.</span>
            </Typography>
          </Stack>

          <Stack display={'flex'} flexDirection={'row'}>
            <CheckCircleIcon fontSize='large' />
            <Typography sx={{lineHeight: .85, marginLeft: 2}} variant='h4'>Safe and secure
              <br />
              <span style={{fontSize: 14, fontWeight: 300, color: '#5e6d55'}}>Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.</span>
            </Typography>
          </Stack>

          
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'column',backgroundColor: '#14A800', width: {md: 300, lg: 480}, borderRadius: '8px', padding: 3, gap: 3}}>
          <Typography variant='h4' color={'white'}>
            We’re <br />
            the world’s work <br />
            marketplace
          </Typography>
          <Stack display={'flex'} flexDirection={'row'}>
            <StarIcon fontSize='large' sx={{color: 'white'}} />
            <Typography sx={{lineHeight: 1, marginLeft: 2, color: 'white'}} variant='h4'>4.9/5
              <br />
              <span style={{fontSize: 14, fontWeight: 300}}>Clients rate professionals on Upwork.</span>
            </Typography>
          </Stack>
          <Stack display={'flex'} flexDirection={'row'}>
            <EmojiEventsIcon fontSize='large' sx={{color: 'white'}} />
            <Typography sx={{lineHeight: 1, marginLeft: 2, color: 'white'}} variant='h4'>Award winner
              <br />
              <span style={{fontSize: 14, fontWeight: 300}}>G2’s 2021 Best Software Awards.</span>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default ExpertiseAndTrust