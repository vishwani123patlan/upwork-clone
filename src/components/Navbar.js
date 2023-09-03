import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, FormControl, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const logOut = () => {
    localStorage.clear()
    setIsLogin(false)
    navigate('/')
  }

  useEffect(()=> {
   const session = localStorage.getItem('session')
   session ? setIsLogin(true) : setIsLogin(false)
  }, [])

  return (
    <>
    <Box height={60} display={'flex'} justifyContent={"space-between"} alignItems={'center'}>
      <Box 
      sx={{display: 'flex', marginLeft: {sm: 2, md: 4}, gap: {xs: 2, sm: 2, md: 2, lg: 4}}} 
      alignItems={'center'}
      >
        <MenuIcon sx={{display: {md: 'none', sm: 'block'}}} fontSize='large'/>
        <Link to="/" style={{textDecoration: 'none'}}><Typography color={'primary'} variant='h5'>Upwork</Typography></Link>
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            alignItems: 'center',
            gap: {md: 2, lg: 4},
          }}
        >
          <Box>
            <Typography sx={{cursor: 'pointer', "&:hover": {color: '#14A800'}}} fontSize={14} fontFamily={"Helvetica Neue"}>Find Talent</Typography>
          </Box>
          <Box>
            <Typography sx={{cursor: 'pointer', "&:hover": {color: '#14A800'}}} fontSize={14} fontFamily={"Helvetica Neue"} onClick={()=> navigate('/find-work')}>Find Work</Typography>
          </Box>
          <Box>
            <Typography sx={{cursor: 'pointer', "&:hover": {color: '#14A800'}}} fontSize={14} fontFamily={"Helvetica Neue"}>Why Upwork</Typography>
          </Box>
          <Box>
            <Typography sx={{cursor: 'pointer', "&:hover": {color: '#14A800'}}} fontSize={14} fontFamily={"Helvetica Neue"}>Enterprise</Typography>
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} alignItems={'center'} gap={2}>
        <Typography sx={{display: {md: 'none', sm: 'block'}}}>Sign up</Typography>
        <SearchIcon sx={{display: {md: 'none', sm: 'block'}}} />
        <Box sx={{display: {md: 'flex', sm: 'none', xs: 'none'}, alignItems: 'center', marginRight: 2}} gap={2}>
          <Box>
            <FormControl>
              <Box sx={{display: 'flex', alignItems: 'center', border: 2, borderRadius: 50, padding: 1, borderColor: '#b9b9b9'}}>
              <SearchIcon sx={{display: {md: 'block', sm: 'none', xs: 'none'}}} />
              <input style={{height: 24, outline: 'none', border: 'none', fontSize: 14}} type='text' placeholder='search' />
              <Typography fontSize={14}>Talent</Typography>
              </Box>
            </FormControl>
          </Box>
         { !isLogin &&
          <Link to="/login" style={{textDecoration: 'none'}}><Typography color={'primary'}>Log in</Typography></Link>
         }
         { !isLogin &&
          <Link to="/signup" style={{textDecoration: 'none'}}><Button variant='contained' sx={{borderRadius: "50px", height: 44, color: 'primary', width: '110px'}}>Sign up</Button></Link>
         }
         { isLogin &&
            <Button variant='contained' sx={{borderRadius: "50px", height: 44, color: 'primary', width: '110px'}} onClick={logOut}>LogOut</Button>
         } 
        </Box>
      </Box>
    </Box>
    <hr color='#b9b9b9' />
    <Box
      sx={{
        display: { xs: 'none', sm: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 3,
        height: 32,
        paddingBottom: 1
      }}
      px={4}
      mt={2}
    >
      <Typography fontSize={14} fontFamily={"Helvetica Neue"}>Development & IT</Typography>
      <Typography fontSize={14} fontFamily={"Helvetica Neue"}>AI Services</Typography>
      <Typography fontSize={14} fontFamily={"Helvetica Neue"}>Sales & Marketing</Typography>
      <Typography fontSize={14} fontFamily={"Helvetica Neue"}>Admin & Customer Support</Typography>
      <Typography fontSize={14} fontFamily={"Helvetica Neue"}>More</Typography>
    </Box>
  </>
  )
}

export default Navbar