import React, { useState } from 'react';
import { Box, Divider, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import Job from './Job';
import { JobsData } from '../utils/constant';

function JobsList() {
  const [openJob, SetOpenJob] = useState(false)
  return (
    <Box mt={4}>
      <Box sx={{display: {xs: 'none', sm: 'none', md: 'flex'}, flexDirection: 'row', gap: 1}}>
        <TextField fullWidth placeholder='Search' InputProps={{style: {height: 36}}} />
        <Search sx={{cursor: 'pointer', background: '#14A800', color: 'white', height: 36, padding: '0px 8px 0px 8px', borderRadius: 1}} fontSize='medium'/>
      </Box>
    <Box mt={4} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: '100%', border: "1px solid #d7d7d7", borderRadius: 1, flexWrap: 'wrap'}}>
      <Box sx={{padding: 2}}>
        <Typography variant='h5'>Jobs you might like</Typography>
      </Box>
      <Box>
        <Typography sx={{padding: 2, width: {xs: 350, sm: 400, md: 'auto'}}}>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant</Typography>
        {
          JobsData.map((job, index) => (
            <>
            <Job data={job} />
            {JobsData.length - 1 !== index && <Divider />}
            </>
          ))
        }
      </Box>
    </Box>
    </Box>
  )
}

export default JobsList