import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState} from 'react';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { validateData } from '../utils/error';

function Login() {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const {name, value} = e.target

    // Validate the field when its value changes
    const errorMessage = validateData(name, value);
    
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: errorMessage });
  }

  const handleSubmit = () => {
    const newErrors = {};
    for (const field in userData) {
      const errorMessage = validateData(field, userData[field]);
      if (errorMessage) {
        newErrors[field] = errorMessage;
      }
    }
    setErrors(newErrors);

    // If there are no errors, you can perform actions (e.g., submit data)
    if (Object.keys(newErrors).length === 0) {
      // Your code to submit the data or perform other actions
      localStorage.setItem('session', JSON.stringify(userData));
      navigate('/find-work')
    }
  }

  return (
    <Box py={{xs: 2, sm: 2, md: 2}} px={{xs:0, sm: 0, md: 2}}>
      <Typography sx={{cursor: 'pointer'}} onClick={()=> navigate('/')} ml={{xs: 2, sm: 2, md: 0}} color={'primary'} variant='h5'>Upwork</Typography>
      <Box mt={{xs: 2, sm: 2, md: 0}} px={{xs: 1, sm: 1, md:10}} py={{xs: 2, sm: 2, md: 5}} sx={{width: "fit-content", height: 'auto', border: 1, borderColor: 'gray', display: 'flex', justifyContent: 'start', margin: '0 auto', borderRadius: {xs: 0, sm: 0, md: 2}, flexDirection: 'column', gap: 3}}>
        <Typography textAlign={'center'} variant='h4' fontWeight={600} letterSpacing={2} fontFamily={'Rza'}>Log in to Upwork</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
          <TextField 
            placeholder='Email' 
            type='email' 
            InputProps={{style: {height: 36}}} 
            name='email'
            value={userData.email}
            onChange={handleInputChange} 
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField 
            placeholder='Password (8 or more characters)' 
            InputProps={{style: {height: 36}}} 
            type='password'
            name='password'
            value={userData.password}
            onChange={handleInputChange} 
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
        </Box>
        <Button variant='contained' sx={{borderRadius: 50}} onClick={handleSubmit}>Login</Button>
        <Divider><Typography color={'secondary'}>or</Typography></Divider>
        <Button variant='contained' sx={{borderRadius: 50}}>Continue with Google</Button>
        <Button variant='outlined' sx={{borderRadius: 50}}>Continue with Apple</Button>
        <Divider>
          <Typography color={'secondary'}>Don't have an Upwork account?</Typography>
        </Divider>
        <Button variant='outlined' onClick={()=> navigate('/signup')} sx={{borderRadius: 50, border: 2}}>Signup</Button>
      </Box>
    </Box>
  )
}

export default Login