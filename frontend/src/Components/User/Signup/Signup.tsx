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
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import axios from '../../../Axios/axios';
import toast, { Toaster } from 'react-hot-toast';
import { isUser } from '../../../redux/user/userdataReducer';
import { addUserInfo } from '../../../redux/user/userInfoReducer'
import { useDispatch } from 'react-redux';


type googleinfo = {
  provider: string,
  data: any
}

interface ImportMetaEnv {
  VITE_GOOGLE_CLIENT_ID: string;
}

type formValues = {
  name: string,
  email: string,
  phonenumber: number,
  password: string,
  repassword: string;
}

type googleSignUpUserinfo = {
  name: string,
  email: string,
  image: string
}

const Signup = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlePassVisibility = () => {
    setViewPassword((prev) => !prev);
  };

  const google_client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID

  //useForm attributes
  const form = useForm<formValues>()
  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const validatePasswordMatch = (value: string) => {
    const { password } = getValues();
    return value === password || 'Passwords do not match';
  };

  const onSubmit: SubmitHandler<formValues> = (data) => {
    // console.log(data, 'datas are:')
    axios.post('/usersignup', data).then((response) => {
      // console.log(response?.data?.status)
      if (response?.data?.status === false) {

        toast.error("Email is already exists, Try new one....")


      } else {
        toast('login success', {
          icon: '👏',
        });
        localStorage.setItem('userAccessToken', response?.data?.accessToken)
        localStorage.setItem('userRefreshToken', response?.data?.refreshToken)
        dispatch(isUser(response?.data?.accessToken))
        // console.log(response.data.userInfo, 'is the user');
        dispatch(addUserInfo(response?.data?.userInfo))
        navigate('/')
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

                  <Typography variant='h5' style={{ fontWeight: 'bold', textAlign: 'center', color: "#4B6190" }}>canteenPro</Typography>

                  <Typography style={{ textAlign: 'center', color: "#8F95A2", fontSize: '14px', paddingTop: '6px' }}>sign up to connect with our family</Typography>


                  <Grid item>
                    <TextField
                      type="text"
                      fullWidth
                      label="name"
                      placeholder="Enter your full name"
                      variant="outlined"
                      color="secondary"
                      size='small'
                      {...register('name', {
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
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="email"
                      fullWidth
                      label="email"
                      placeholder="Email address"
                      variant="outlined"
                      color="secondary"
                      size='small'
                      {...register('email', {
                        required: 'email is required',
                        pattern: {
                          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        }
                      })}
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="text"
                      fullWidth
                      label="phonenumber"
                      placeholder="Phone number"
                      variant="outlined"
                      color="secondary"
                      size='small'
                      {...register('phonenumber', {
                        required: 'phone number is required',
                        pattern: {
                          value: /^\d{10}$/,
                          message: 'Please enter a valid phone number',
                        }
                      })}
                      error={!!errors.phonenumber}
                      helperText={errors?.phonenumber?.message}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type={viewPassword ? 'text' : 'password'}
                      fullWidth
                      label="password"
                      placeholder="Enter the password"
                      variant="outlined"
                      color="secondary"
                      size='small'
                      {...register('password', {
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
                      error={!!errors.password}
                      helperText={errors?.password?.message}

                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type={viewPassword ? 'text' : 'password'}
                      fullWidth
                      label="repassword"
                      placeholder="Re-enter the password"
                      variant="outlined"
                      color="secondary"

                      size='small'
                      {...register('repassword', {
                        required: 'confirm your password',
                        validate: validatePasswordMatch,
                      })}
                      error={!!errors.repassword}


                      helperText={errors.repassword ? errors.repassword?.message : 'dont share the password'}

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

                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    marginTop={2}
                    marginBottom={2}
                  >
                    <Box flexGrow={1}>
                      <hr />
                    </Box>
                    <Typography variant="body1" style={{ margin: '0 1rem' }}>
                      or
                    </Typography>
                    <Box flexGrow={1}>
                      <hr />
                    </Box>
                  </Grid>

                  <Grid item>


                    <LoginSocialGoogle

                      client_id={google_client_id} //googleClientIdFromGoogleCloud
                      scope="openid profile email"
                      discoveryDocs="claims_supported"
                      access_type="offline"
                      onResolve={async ({ provider, data }: googleinfo) => {
                        const googleSingnUpinfo: any = await data

                        const details: googleSignUpUserinfo = {
                          name: googleSingnUpinfo?.name,
                          email: googleSingnUpinfo?.email,
                          image: googleSingnUpinfo?.picture
                        }
                        console.log(details, 'data is this...');

                        axios.post('/usersignup/googlesignup', details).then((res) => {
                          console.log(res)
                          if (res?.data?.status === false) {

                            toast.error("Email is already exists, do login with google!")
                            setTimeout(() => {
                              navigate('/user/login')
                            }, 1500)



                          } else {
                            toast('login success', {
                              icon: '👏',
                            });
                            localStorage.setItem('userAccessToken', res?.data?.accessToken)
                            localStorage.setItem('userRefreshToken', res?.data?.refreshToken)
                            dispatch(isUser(res?.data?.accessToken))
                            console.log(res.data.userInfo, 'is the user');
                            dispatch(addUserInfo(res?.data?.userInfo))
                            navigate('/')

                          }
                        }).catch((err) => console.log(err, 'error got on goole signUp'))


                      }}
                      onReject={(err: any) => {
                        console.log(err, 'errorrrr');
                      }}
                    >
                      {/* <GoogleLoginButton /> */}
                      <Button
                        variant="outlined"
                        startIcon={<Google />}
                        fullWidth
                        size="large"
                      >
                        Google SignUp
                      </Button>


                    </LoginSocialGoogle>

                  </Grid>

                  <Grid item paddingTop={2}>

                    <Link
                      variant="body2"
                      style={{
                        cursor: 'pointer',
                        color: '#5F5B5B',
                        textDecoration: 'none',
                      }}

                      onClick={() => navigate('/user/login')}
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

              src="https://img.freepik.com/premium-vector/bike-delivery-service-concept-courier-character-riding-bicycle-with-delivery-box_113065-599.jpg?w=1060"
              alt="canteenPro"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>

  )
}

export default Signup