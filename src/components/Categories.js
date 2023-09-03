import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react';
import CategoryCard from './CategoryCard';

function Categories() {
  return (
    <Box sx={{marginTop: {xs: 5, md: 4}}}>
      <Typography variant='h3' fontWeight={'bold'} fontFamily={'Rza'}>Browse talent by category</Typography>
      <Typography paragraph color={'secondary'}>Looking for work? <Link color={'primary'} href='#' >Browse jobs</Link></Typography>
      <Stack sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row', md: 'row'}, flexWrap: 'wrap', alignItems: {xs: 'center', lg: 'start'}, justifyContent: {xs: 'center', lg: 'start'}}} gap={3} mt={6}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Stack>
    </Box>
  )
}

export default Categories