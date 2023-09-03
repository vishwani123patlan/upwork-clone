import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Divider, Typography, Chip, Button, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import { getTimeDifference } from '../utils/utils';
import CampaignIcon from '@mui/icons-material/Campaign';
import FlagIcon from '@mui/icons-material/Flag';

function JobDrawer({openJob, SetOpenJob, data}) {
  console.log(SetOpenJob)
  const handleClose = () => {
    SetOpenJob(false)
  }
  return (
    <Drawer
      anchor={"right"}
      open={openJob}
      onClose={handleClose}
    >
      <Box sx={{width: {md: '130vh'}, padding: 3}}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 5}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <IconButton onClick={handleClose}><ArrowBackIosNewIcon /></IconButton>
            <Link style={{color: '#14A800', "&hover": {color: '#14A800'}}}>Open in new tab</Link>
          </Box>
          <Box sx={{display: 'flex', gap: 1}}>
            <Box sx={{border: '1px solid #d7d7d7', borderRadius: 1, flex: .7}}>
                <Box sx={{padding: 3}}>
                  <Typography variant='h5'>{data.job_title}</Typography>
                  <Link style={{color: '#14A800', "&hover": {color: '#14A800'}, textDecoration: 'none'}}><Typography variant='h6' fontSize={16}>{data.project_type}</Typography></Link>
                  <Typography paragraph color={'secondary'}>Posted: {getTimeDifference(data.posted_time)}</Typography>
                  <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                    <CampaignIcon />
                    <Typography paragraph fontSize={15}>Specialized profiles can help you better highlight your expertise when submitting proposals to jobs like these. Create a specialized profile.</Typography>
                  </Box>
                </Box>
                <Divider />
                <Box sx={{padding: 3}}>
                  <Typography paragraph>{data.job_description}</Typography>
                </Box>
                <Divider />
                <Box sx={{padding: 3, display: 'flex', justifyContent: 'start', gap: 10}}>
                  <Typography paragraph fontSize={14}><strong>${data.budget}</strong> <br />{data.budget_type}</Typography>
                  <Typography paragraph fontSize={14}><strong>${data.level_of_expertise}</strong> <br />I am looking for a mix of experience and value</Typography>
                </Box>
                <Divider />
                <Box sx={{padding: 3, display: 'flex', justifyContent: 'start', gap: 10}}>
                  <Typography paragraph fontSize={14}><strong>Project Type:</strong> {data.budget_type}</Typography>
                </Box>
                <Divider />
                <Box sx={{padding: 3, display: 'flex', justifyContent: 'start', gap: 2, flexDirection: 'column'}}>
                  <Typography paragraph fontSize={16}><strong>Skills and Expertise</strong></Typography>
                  <Box sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
                  { data.skills_required.map((skill) => (
                    <Chip label={skill} />
                  ))}
                  </Box>
                </Box>
                <Divider />
                <Box sx={{padding: 3, display: 'flex', justifyContent: 'start', gap: 2, flexDirection: 'column'}}>
                  <Typography><strong>Activity on this Job</strong></Typography>
                  <Box>
                    <Typography color={'secondary'} fontSize={15}>Proposals: {data.total_proposals}</Typography>
                    <Typography color={'secondary'} fontSize={15}>Hired: {data.hired ? 'Yes' : 'No'}</Typography>
                    <Typography color={'secondary'} fontSize={15}>Interviewing: {data.interviewing ? 'Yes' : 'No'}</Typography>
                    <Typography color={'secondary'} fontSize={15}>Invite Sent: {data.invites_sent}</Typography>
                    <Typography color={'secondary'} fontSize={15}>Invite Sent: {data.unanswered_invites}</Typography>
                  </Box>
                </Box>
            </Box> 
            <Box sx={{flex: .3}}>
              <Box sx={{border: '1px solid #d7d7d7', borderRadius: 1, padding: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center'}}>
                  <Button sx={{width: 180, borderRadius: 50}} variant='contained'>Apply</Button>
                  <Button sx={{width: 180, borderRadius: 50}} variant='outlined'>Save Job</Button>
                  <Box sx={{display: 'flex', gap: 1}}>
                    <FlagIcon color='primary' />
                    <Typography color={'primary'} fontSize={'medium'}>Flag as inappropriate</Typography>
                  </Box>
              </Box>

              <Box sx={{border: '1px solid #d7d7d7', borderRadius: 1, padding: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'start'}} mt={2}>
                  <Typography variant='h6' fontSize={15}>About the Client</Typography>
                  <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                  <Typography><strong>United States</strong><br />Wilmington 12:16 pm</Typography>
                  <Typography><strong>73 jobs posted</strong><br />87% hire rate, 5 open jobs</Typography>
                  <Typography><strong>$268K total spent</strong><br />112 hires, 8 active</Typography>
                  <Typography><strong>$31.28 /hr avg hourly rate paid</strong><br />6,121 hours</Typography>
                  <Typography><strong>Tech & IT</strong><br />Small company (2-9 people)<br />Member since Apr 13, 2017</Typography>
                  </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      <Typography></Typography>
      </Box>
    </Drawer>
  )
}

export default JobDrawer