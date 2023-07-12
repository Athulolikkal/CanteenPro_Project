import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import axios from '../../../Axios/axios';
import toast, { Toaster } from 'react-hot-toast';
import sideIcone from '../../../assets/images/Online world-cuate.png'
import { useDispatch } from 'react-redux';
import {addCanteenTokens} from '../../../redux/canteen/canteenTokensReducers.ts'
import { addCanteenInfo } from '../../../redux/canteen/canteenInfoReducers';





type formValues = {
  CanteenName: string,
  Email: string,
  Phonenumber: number,
  City: string,
  Pincode: number,
  Password: string,
  Repassword: string;
}



const  CanteenSignUp = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const handlePassVisibility = () => {
    setViewPassword((prev) => !prev);
  };



  //useForm attributes
  const form = useForm<formValues>()
  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const validatePasswordMatch = (value: string) => {
    const { Password } = getValues();
    return value === Password || 'Passwords do not match';
  };

  const onSubmit: SubmitHandler<formValues> = (data) => {
    // console.log(data, 'datas are:')
    axios.post('/usersignup/canteensignup', data).then((response) => {
      // console.log(response)
      if (response?.data?.status === false) {

        toast.error("Email is already exists, Try new one....")


      } else {
        toast('login success', {
          icon: '👏',
        });
        console.log(response);
        localStorage.setItem('canteenAccessToken',response?.data?.canteenAccesstoken)
        localStorage.setItem('canteenRefreshToken',response?.data?.canteenRefreshToken)
    
        const tokens={
          canteenAccessToken:response?.data?.canteenAccesstoken,
          canteenRefreshToken:response?.data?.canteenRefreshToken,
         }
      
        dispatch(addCanteenTokens(tokens))
        dispatch(addCanteenInfo(response?.data?.canteenDetails))
        navigate('/canteen/addpackages')
    
        
      }
    }).catch((error) => {
      console.log(error, 'error found')
    })

  };


  return (
    <div>
      <Container maxWidth="md">
        <Toaster
          position="top-left"
          reverseOrder={false}
        />

        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item md={6} xs={12}>
            <Paper elevation={0} sx={{ padding: 5 }}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container direction="column" spacing={2}>

                  <Typography variant='h5' style={{ fontWeight: 'bold', textAlign: 'center', color: "#4B6190" }}>canteenPro </Typography>

                  <Typography style={{ textAlign: 'center', color: "#8F95A2", fontSize: '14px', paddingTop: '6px' }}>canteens can join our family by signing here!!</Typography>


                  <Grid item>
                    <TextField
                      type="text"
                      fullWidth
                      label="CanteenName"
                      placeholder="Enter your canteen name"
                      variant="standard"
                      color="secondary"
                      size="small"
                      {...register('CanteenName', {
                        required: 'name is required',
                        pattern: {
                          value: /^(?!\s)[A-Za-z\s'-]+$/,
                          message: 'only accept letters'
                        },
                        minLength: {
                          value: 3,
                          message: 'Name must be at least 3 characters long',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Name cannot exceed 30 characters',
                        },
                        validate: (value) => !value.startsWith(' ') ||
                          "can't start with white spaces"
                      })}
                      error={!!errors.CanteenName}
                      helperText={errors?.CanteenName?.message}
                    />
                  </Grid>

                  <Grid item>
                    <TextField
                      type="email"
                      fullWidth
                      label="Email"
                      placeholder="Email address"
                      variant="standard"
                      color="secondary"
                      size='small'
                      {...register('Email', {
                        required: 'email is required',
                        pattern: {
                          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        }
                      })}
                      error={!!errors.Email}
                      helperText={errors?.Email?.message}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="text"
                      fullWidth
                      label="Phonenumber"
                      placeholder="Phone number"
                      variant="standard"
                      color="secondary"
                      size='small'
                      {...register('Phonenumber', {
                        required: 'phone number is required',
                        pattern: {
                          value: /^\d{10}$/,
                          message: 'Please enter a valid phone number',
                        }
                      })}
                      error={!!errors.Phonenumber}
                      helperText={errors?.Phonenumber?.message}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="text"
                      fullWidth
                      label="City"
                      placeholder="Enter your city"
                      variant="standard"
                      color="secondary"
                      size='small'
                      {...register('City', {
                        required: 'city name is required',
                        pattern: {
                          value: /^(?!\s)[A-Za-z\s'-]+$/,
                          message: 'enter your current city',
                        }
                      })}
                      error={!!errors.City}
                      helperText={errors?.City?.message}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="text"
                      fullWidth
                      label="Pincode"
                      placeholder="Please enter your pinncode"
                      variant="standard"
                      color="secondary"
                      size='small'
                      {...register('Pincode', {
                        required: 'pincode is required',
                        pattern: {
                          value: /^[1-9]\d{5,5}$/,
                          message: 'Please enter a valid pincode',
                        }
                      })}
                      error={!!errors.Pincode}
                      helperText={errors?.Pincode?.message}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type={viewPassword ? 'text' : 'password'}
                      fullWidth
                      label="Password"
                      placeholder="Enter the password"
                      variant="standard"
                      color="secondary"
                      size='small'
                      {...register('Password', {
                        required: 'password is required',
                        maxLength: {
                          value: 8,
                          message: 'maximum eight letters'
                        },
                        minLength: {
                          value: 4,
                          message: 'minimum four letters'
                        }
                      })}
                      error={!!errors.Password}
                      helperText={errors?.Password?.message}

                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type={viewPassword ? 'text' : 'password'}
                      fullWidth
                      label="Repassword"
                      placeholder="Re-enter the password"
                      variant="standard"
                      color="secondary"

                      size='small'
                      {...register('Repassword', {
                        required: 'confirm your password',
                        validate: validatePasswordMatch,
                      })}
                      error={!!errors.Repassword}


                      helperText={errors.Repassword ? errors.Repassword?.message : 'dont share the password'}

                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handlePassVisibility}
                              aria-label="password"
                              edge="end"
                            >
                              {viewPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item>
                    <Button type='submit' variant="contained" fullWidth size="large">
                      SignUp
                    </Button>
                  </Grid>



                  <Grid item paddingTop={2}>

                    <Link
                      variant="body2"
                      style={{
                        cursor: 'pointer',
                        color: '#5F5B5B',
                        textDecoration: 'none',
                      }}

                      onClick={() => navigate('/canteen/login')}
                    >
                      If you already have an account?
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <img
              className="rounded-2xl"

              src={sideIcone}
              alt="canteenPro"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>

  )
}

export default CanteenSignUp