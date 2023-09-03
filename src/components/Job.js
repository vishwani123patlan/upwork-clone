import React, { useState } from 'react';
import JobDrawer from './JobDrawer';
import { Box, Typography, Chip } from '@mui/material';
import { Map, PaymentOutlined, StarRate } from '@mui/icons-material';
import { getTimeDifference } from '../utils/utils';

function Job({data}) {
  const [openJob, SetOpenJob] = useState(false)
  return (
    <>
    <Box sx={{display: 'flex', flexDirection: 'column', cursor: 'pointer', gap: 1, padding: 2}} onClick={(event)=> {SetOpenJob(true)}}>
        <Typography color={'primary'}>{data.job_title}
        </Typography>
        <Typography paragraph sx={{fontSize: 12, width: {xs: 350, sm: 400, md: 'auto'}}}><strong >{data.budget_type}</strong>- {data.level_of_expertise} - Est. Budget: ${data.budget} - Posted {getTimeDifference(data.posted_time)}</Typography>
        <Typography paragraph sx={{fontSize: 14, width: {xs: 350, sm: 400, md: 'auto'}}}>{data.job_description}</Typography>
        
        <Box sx={{display: 'flex',  gap: 1, flexWrap: 'wrap'}}>
          { data.skills_required.map((skill) => (
            <Chip label={skill} />
          ))}
        </Box>

        <Typography paragraph sx={{fontSize: 12}}>Purposals: <strong>{data.total_proposals}</strong></Typography>

        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, fontSize: 16}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <PaymentOutlined fontSize={'extra_small'} />
            <Typography fontSize={12}>Payments</Typography>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <StarRate fontSize={'extra_small'} />
            <Typography fontSize={12}>{data.ratings} Ratings</Typography>
          </Box>
          <Box>
            <Typography fontSize={12}>${data.previous_spend_money}k + spent</Typography>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Map fontSize={'extra_small'} />
            <Typography fontSize={12}>{data.country}</Typography>
          </Box>
        </Box>
    </Box>
    {
      openJob && <JobDrawer openJob={openJob} SetOpenJob={SetOpenJob} data={data} />
    }
    </>
  )
}

export default Job