import React from 'react'
import { Box, Typography, styled, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { canteenLogout } from '../../redux/canteen/canteenTokensReducers';
import { useNavigate } from 'react-router-dom';


const JwtSessionExpiredCanteen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ContainerBox = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Align items at the center
        height: "70vh",
        // Adjust the height to fill the viewport
    }));


    const handleLogin = () => {
       console.log('handlelogin');
        localStorage.removeItem('canteenAccessToken')
        dispatch(canteenLogout())
        navigate('/canteen/login')

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

export default JwtSessionExpiredCanteen;
