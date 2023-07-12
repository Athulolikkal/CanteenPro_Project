import React from 'react'
import {Box,Button,styled,Typography} from '@mui/material';
import canteenIcon from '../../../assets/images/pngwing.com (1).png'
import packagesIcon from '../../../assets/images/pngegg (1).png'
import ArrowRightAltIcon  from '@mui/icons-material/ArrowRightAlt';
import {useNavigate} from 'react-router-dom'



const OurAssets = () => {
 
const navigate=useNavigate()

    const viewCanteens=()=>{
        // console.log('its clickedd on viewCanteens')
        navigate('/user/showallcanteens')

    }
    
    const viewPackages=()=>{
        // console.log('its clicked on viewPackages');
        navigate('/user/showallpackages')
    }
 
 
 
    const CustomBox=styled(Box)(({theme})=>({
    width:'30%',
    [theme.breakpoints.down('md')]:{
        width:'85%'
    }
 }))

 const GuidesBox=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-evenly',
    width:'70%',
    marginTop:theme.spacing(5),
    [theme.breakpoints.down('md')]:{
        width:'100%'
    },
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
    },
 }));
 
 const GuidBox=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:theme.spacing(5),
    margin:theme.spacing(2,0,2,0),

 }))
 
 
 
    return (
    <Box sx={{display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    }}>
      <div style={{
        width:'5%',
        height:'5px',
        backgroundColor:'#000339',
        margin:'0 auto',

      }}>

      </div>

      <Typography variant='h3' sx={{fontSize:'35px',fontWeight:'bold',color:'#000339',my:3,pt:5}}>
         View Our Assests?
         </Typography>
        <CustomBox>
            <Typography variant='body2' sx={{fontSize:'16px',fontWeight:'500',color:'#5A6473',textAlign:'center'}}>
             click here to view our all canteens and all packages provided by various canteen its helps to find you best!
            </Typography>
        </CustomBox>
        <GuidesBox>
            <GuidBox onClick={viewCanteens}>
                <img src={canteenIcon} alt="all canteens" style={{width:'8rem'}} />
               <Typography variant='body2' sx={{fontWeight:'500',fontSize:'20px',color:'#3Bc45',my:1}}>
                   Find All Canteens 
               </Typography>
               <Box sx={{cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography variant='body2' sx={{fontWeight:"bold",fontSize:'14px',color:'#0689FF'}}>
                    View canteens
                </Typography>
               <div >
               <ArrowRightAltIcon style={{color:'#0689FF'}} />
               </div>
               
               </Box>
            </GuidBox>

            <GuidBox onClick={viewPackages}>
                <img src={packagesIcon} alt="all canteens" style={{width:'8rem'}}  />
               <Typography variant='body2' sx={{fontWeight:'500',fontSize:'20px',color:'#3Bc45',my:1}}>
                   Find All Packages
               </Typography>
               <Box sx={{cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography variant='body2' sx={{fontWeight:"bold",fontSize:'14px',color:'#0689FF'}}>
                    View packages
                </Typography>
               <div >
               <ArrowRightAltIcon style={{color:'#0689FF'}} />
               </div>
               
               </Box>
            </GuidBox>


        </GuidesBox>
    </Box>
  )
}

export default OurAssets