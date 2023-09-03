import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState} from 'react';
import RectangleIcon from '@mui/icons-material/Rectangle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { validateData } from '../utils/error';

function Signup() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  })

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [readyToSignUp, setReadyToSignUp] = useState(false);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate the field when its value changes
    const errorMessage = validateData(name, value);
    
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: errorMessage });
  };

  const submitSignUp = () => {
    // Validate all fields
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
      setLoading(true)
      localStorage.setItem('session', JSON.stringify(userData));
      setLoading(false)
      navigate('/find-workgit remote add origin https://github.com/vishwani123patlan/upwork-clone.git')
    }
  }


  return (
    <Box py={{xs: 2, sm: 2, md: 2}} px={{xs:0, sm: 0, md: 2}}>
      <Typography sx={{cursor: 'pointer'}} onClick={()=> navigate('/')} ml={{xs: 2, sm: 2, md: 0}} color={'primary'} variant='h5'>Upwork</Typography>
      <Box mt={{xs: 2, sm: 2, md: 0}} px={{xs: 1, sm: 1, md:10}} py={{xs: 2, sm: 2, md: 5}} sx={{width: "fit-content", height: 'auto', border: 1, borderColor: 'gray', display: 'flex', justifyContent: 'start', margin: '0 auto', borderRadius: {xs: 0, sm: 0, md: 2}, flexDirection: 'column', gap: 3}}>
        { !readyToSignUp ?
          <>
          <Typography variant='h4' fontWeight={600} letterSpacing={2} fontFamily={'Rza'}>Join as a client or freelancer</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <FormControl sx={{display: 'flex', flexDirection: 'row'}}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{display: 'flex', flexDirection: 'row', gap: 2}}
            >
              <Box sx={{border: '1px solid gray', padding: 3, borderRadius: 1, width: {xs: '100%', sm: '100%', md: 'auto'}}}>
                  <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <RectangleIcon fontSize='large' />
                    <FormControlLabel value="client" control={<Radio />} onClick={(event)=> {setUserData({...userData, role: event.target.value})}} />
                  </Box>
                  <Typography variant='h5' fontFamily={'Neue'}>
                      I’m a client,<br /> hiring for a project
                  </Typography>
              </Box>
              <Box sx={{border: '1px solid gray', padding: 3, borderRadius: 1, width: {xs: '100%', sm: '100%', md: 'auto'}}}>
                  <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <AccessibilityOutlinedIcon fontSize='large' />
                    <FormControlLabel value="freelance" control={<Radio />} onClick={(event)=> {setUserData({...userData, role: event.target.value})}} />
                  </Box>
                  <Typography variant='h5' fontFamily={'Neue'}>
                  I’m a freelancer,<br /> looking for work
                  </Typography>
              </Box>
            </RadioGroup>
          </FormControl>
          </Box>
          <Button sx={{minWidth: "50%", borderRadius: 50, alignSelf: 'center'}} disabled={!userData.role} variant='contained' onClick={(event)=>setReadyToSignUp(true)}>{userData.role==="client" ? `Join As ${userData.role}` : userData.role==="freelance" ? `Apply as a freelancer` : 'Create Account' }</Button></>
          : userData.role &&  <>
            <Typography textAlign={'center'} variant='h4' fontWeight={600} letterSpacing={2} fontFamily={'Rza'}>{userData.role==="freelance" ? 'Sign up to find work you love' : 'Sign up to hire talent'}</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
              <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'column', md: 'row'}, justifyContent: 'space-between', gap: {xs: 3, sm: 3, md: 0}}}>
                <TextField 
                  sx={{width: {xs: '100%', sm: '100%', md: 260}}} 
                  InputProps={{style: {height: 36}}} 
                  placeholder='First name' 
                  name='firstName'
                  value={userData.firstName}
                  onChange={handleInputChange}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />
                <TextField 
                  sx={{width: {xs: '100%', sm: '100%', md: 260}}} 
                  InputProps={{style: {height: 36}}} 
                  placeholder='Last name' 
                  name='lastName'
                  value={userData.lastName}
                  onChange={handleInputChange}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />
              </Box>
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
              <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography sx={{fontSize: 12}}>Send me emails with tips on how to find talent that fits my needs.</Typography>} />
              <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography sx={{fontSize: 12}}>Yes, I understand and agree to the <Link color={'primary'}>Upwork Terms of Service</Link> , including the <Link color={'primary'}>User Agreement</Link><br /> and <Link color={'primary'}>Privacy Policy</Link>.</Typography>} />
            </Box>
           {
            !loading && 
            <Button variant='contained' sx={{borderRadius: 50}} onClick={submitSignUp}>Create my acount</Button>
           }
            {
             loading && 
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
                color='primary'
                sx={{borderRadius: 50}}
              >
                Creating Account
              </LoadingButton> 
            }
          </>
        }
        <Typography sx={{padding: 2, textAlign: 'center'}}>Already have an account? <Link style={{color: '#14A800'}} to="/login">Login</Link></Typography>
      </Box>
    </Box>
  )
}

export default Signup