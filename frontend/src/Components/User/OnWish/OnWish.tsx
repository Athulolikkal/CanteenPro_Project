
import { Box, Typography, Grid } from '@mui/material'
import { Customcontainer, CustomButton, BookingButton, CustomBox, ButtonContainer, TextContainer, CustomBoxText } from './Style'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from '../../../Axios/axios'
import { useEffect, useState } from 'react';
import { WishType } from '../../../types';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

interface storeType {
  userInfo?: {
    userId?: '',
    name?: '',
    email?: '',
  }
}

const OnWish = () => {
  const [userWish, setUserWish] = useState<WishType[]>([])
  const [loading,setLoading]=useState<boolean>(false)
  const navigate = useNavigate()
  const userData = useSelector((state: storeType) => state?.userInfo)
  const userId: string | undefined = userData?.userId
  const fetchUserWish = () => {
    setLoading(true)
    axios.get(`/wish/getwish?userId=${userId}`).then((response) => {
      // console.log(response)
      const wishes = response?.data;
      wishes ? setUserWish(wishes) : setUserWish([])
      setLoading(false)

    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(() => {
    fetchUserWish()
  }, [])


  const getDayRemaining = (endDate: string): number => {
    if (!endDate) {
      return 0;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const parsedEndDate = new Date(endDate);
    const daysRemaining = Math.ceil((parsedEndDate.getTime() - currentDate.getTime()) / oneDay);
    return daysRemaining;
  };
  const handleRemove = async (id: string | undefined) => {
    try {
      const willDelete = await swal({
        title: "Do you want to Delete?",
        text: "Are you sure do you want to remove its from ON MY WISH?",
        icon: "error",

      });

      if (willDelete) {
        // console.log(id, 'id is here?');
        axios.delete(`/wish/removeitem?wishid=${id}`).then((response) => {
          if (response.status === 200) {
            fetchUserWish()
          }
        }).catch((err) => console.log(err))
      }
    } catch (err) {
      console.log(err);
    }
  }

  const bookPackageFromOnWish=async(wishId:string|undefined)=>{
      navigate(`/user/wishitemview/${wishId}`)
    
     
  }

  return (
    <Box sx={{ maxWidth: '100%', padding: 5 }}>
      <Box sx={{ marginTop: '4rem' }}>
     
      {loading?(<Typography sx={{ textAlign: 'center', marginTop: '12rem', color: '#000339', fontWeight: 700 }}>
         loading.......
        </Typography>):

        userWish.length === 0 ? (<Typography sx={{ textAlign: 'center', marginTop: '12rem', color: '#000339', fontWeight: 700 }}>
          There is no saved packages.....add packages to your canteen
        </Typography>) : (

          userWish.map((item) => (

            <Customcontainer>
              <TextContainer>
                <CustomBox>
                  <img
                    src={item?.image ? (item?.image) : (item?.breakfast?.image)}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '100px',
                      border: '1px solid white',
                      display: 'block',
                    }}
                  />

                </CustomBox>

                <CustomBoxText>

                  {/* <Typography variant='h6' sx={{ fontWeight: '800', fontSize: '25px' }}>
                    <CurrencyRupeeIcon fontSize='small' />  {item?.total?(item?.total) 'monthly':(item?.totalPerDayRate) 'perday'}
                  </Typography> */}
                  <Typography variant='h6' sx={{ fontWeight: '750', fontSize: '22px' }}>
                    <CurrencyRupeeIcon fontSize='small' /> {item?.total ? (
                      <>
                        {item.total} <Typography variant='subtitle2' component='span' sx={{ opacity: '0.7' }}>monthly</Typography>
                      </>
                    ) : (
                      <>
                        {item?.totalPerDayRate} <Typography variant='subtitle2' component='span' sx={{ opacity: '0.7' }}>perday</Typography>
                      </>
                    )}
                  </Typography>




                  <Typography sx={{ fontSize: '14px', fontWeight: '600', marginBottom: 1, color: '#A0A7AB ', }}>
                    {item?.source === 'package' ? `item saved from ${item?.source}` : `item is ${item?.source}`}
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: '600', marginBottom: 1, color: '#A0A7AB ', }}>
                    {`expires within ${getDayRemaining(item?.endDate || '')} days`}
                  </Typography>
                </CustomBoxText>
              </TextContainer>


              <CustomButton sx={{}} onClick={() => handleRemove(item?._id)}>Remove</CustomButton>
              <BookingButton sx={{}} onClick={() => bookPackageFromOnWish(item?._id)}>BookNow</BookingButton>

            </Customcontainer>

          ))

        )}
      </Box>
    </Box>
  );
};



export default OnWish