import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react';
import GradeIcon from '@mui/icons-material/Grade';

function CategoryCard() {
  return (
    <Box>
      <Card sx={{width: {xs: 320, sm: 420, md: 300, lg: 290}, height: {xs: 100, md: 150}, backgroundColor: "#f8faf7"}}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start'}}>
          <Typography variant='h5'>Development & IT</Typography>
          <Box sx={{display: 'flex', marginTop: 2}} gap={3}>
            <Box sx={{display: 'flex'}} gap={1}>
              <GradeIcon color='primary' />
              <Typography>4.85/5</Typography>
            </Box>
            <Typography>1854 skills</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CategoryCard