import React from 'react'
import { Box, Typography, styled, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from '../redux/user/userdataReducer';
import { useNavigate } from 'react-router-dom';


const JwtSessionExpired = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ContainerBox = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
        height: "70vh",
       
    }));


    const handleLogin = () => {
       console.log('handlelogin');
        localStorage.removeItem('userAccessToken')
        dispatch(logout())
        navigate('/user/login')

    }


    return (
        <Box>
            <ContainerBox>
                {/* session expired, do login again */}
                <Box
                    sx={{
                        backgroundColor: '#17275F',
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        borderRadius: '15px',
                       
                    }}
                >
                    <Typography sx={{ textAlign: "center", color: "white", padding: 3, marginTop: '2rem' }}>
                        Session expired,
                        please log in again
                    </Typography>
                    <Button sx={{ padding: 2, marginBottom: 2, color: 'white' }} onClick={handleLogin} >Login</Button>
                </Box>
            </ContainerBox>
        </Box>
    );
};

export default JwtSessionExpired;
