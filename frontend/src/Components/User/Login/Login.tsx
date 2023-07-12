import { useState } from 'react';
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
import { useNavigate } from 'react-router-dom'
import { LoginSocialGoogle } from 'reactjs-social-login';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from '../../../Axios/axios';
import toast, { Toaster } from 'react-hot-toast';
import { isUser } from '../../../redux/user/userdataReducer';
import {addUserInfo} from '../../../redux/user/userInfoReducer'
import { useDispatch } from 'react-redux';


interface ImportMetaEnv {
  VITE_GOOGLE_CLIENT_ID: string;
}

type googleinfo = {
  provider: string,
  data: any
}

type formValues = {
  email: string,
  password: string,
}

type googleLoginUserinfo = {
  name: string,
  email: string,
  image: string
}

export const Login = () => {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const navigate = useNavigate()
  const dispatch=useDispatch()
 
  const handlePassVisibility = () => {
    setViewPassword((prev) => !prev);
  };
  const navigateToSignup = () => {
    navigate('/user/signup')
  }

  const google_client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID

  //useForm attributes
  const form = useForm<formValues>()
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit: SubmitHandler<formValues> = (data) => {
    // console.log(data)
    axios.post('/userlogin', data).then((res) => {
      // console.log(res, 'response after login')
      if (res?.data?.status === true) {
        toast('login success', {
          icon: '👏',
        });
        localStorage.setItem('userAccessToken',res?.data?.accessToken)
        localStorage.setItem('userRefreshToken',res?.data?.refreshToken)
        dispatch(isUser(res?.data?.accessToken))
        // console.log(res.data.userInfo,'is the user');
        dispatch(addUserInfo(res?.data?.userInfo))
        navigate('/')
      }
      else {
        toast.error("incorrect email or password")
      }
    })
  }
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
                  <Typography style={{ textAlign: 'center', color: "#8F95A2", fontSize: '14px', paddingTop: '6px' }}>If you already a member then you can easily login!</Typography>
                  <Grid item>
                    <TextField
                      type="email"
                      fullWidth
                      label="email"
                      placeholder="Email address"
                      variant="outlined"
                      color="secondary"
                      {...register('email', {
                        required: 'email is required',
                        pattern: {
                          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                          message: 'enter a valid email address'
                        }
                      })}
                      error={!!errors.email}
                      helperText={errors?.email?.message}
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
                    <Button type='submit' variant="contained" fullWidth size="large">
                      Login
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
                      client_id={google_client_id}
                      scope='openid profile email'
                      discoveryDocs='offline'
                      onResolve={async ({ provider, data }: googleinfo) => {
                        const googleSingnUpinfo: any = await data
                        const details: googleLoginUserinfo = {
                          name: googleSingnUpinfo?.name,
                          email: googleSingnUpinfo?.email,
                          image: googleSingnUpinfo?.picture
                        }

                        console.log(details, 'userEmail is this');
                        axios.post('/userlogin/googlelogin', details).then((res) => {
                          if (res.data.status === true) {
                            console.log('userloged successfully')
                            toast('login success', {
                              icon: '👏',
                            });
                            localStorage.setItem('userAccessToken',res?.data?.accessToken)
                            localStorage.setItem('userRefreshToken',res?.data?.refreshToken)
                            dispatch(isUser(res?.data?.accessToken))
                            dispatch(addUserInfo(res?.data?.userInfo))
                            navigate('/')
                          } else {
                            toast.error("not a valid email!")
                          }
                        })
                      }}
                    >

                      <Button
                        variant="outlined"
                        startIcon={<Google />}
                        fullWidth
                        size="large"
                      >
                        Google SignIn
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

                    >
                      Forgot password?
                    </Link>
                    <br />
                    <Link
                      variant="body2"
                      style={{
                        cursor: 'pointer',
                        color: '#5F5B5B',
                        textDecoration: 'none',
                      }}
                      onClick={navigateToSignup}
                    >
                      If you don't have an account?
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <img
              className="rounded-2xl"
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=740&t=st=1684240815~exp=1684241415~hmac=b79ccd28de26df85c4aef037b2b624b21817451db10b4af9423c3002a1ccefd6"
              alt="canteenPro"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};