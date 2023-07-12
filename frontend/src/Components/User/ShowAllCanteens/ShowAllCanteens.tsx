
import { Box, Typography,Pagination,Stack } from '@mui/material'
import { Customcontainer, CustomButton, BookingButton, CustomBox, TextContainer, CustomBoxText } from './Style'
import swal from 'sweetalert';
import { useEffect,useState } from 'react';
import axios from '../../../Axios/axios';
import { CanteenType } from '../../../types';




const ShowAllCanteens = () => {
  const [page, setPage] = useState<number>()
  const [allCanteens,setAllCanteens]=useState<CanteenType[]>([]);
   
  const fetchAllCanteens = async (pageNumber:number) => {
     
      axios.get(`/allcanteen/viewallcanteens?pageNumber=${pageNumber}`).then((response) => {
        // console.log(response?.data?.showCanteens);
        setAllCanteens(response?.data?.showCanteens)
        setPage(response?.data?.numberOfPages)
      
      
      
      }).catch((err)=>console.log(err))
    }
   
    useEffect(()=>{
      fetchAllCanteens(1)
    },[])

  const pageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
    try {
      // console.log(page);
      fetchAllCanteens(page)
    } catch (err) {
      console.log(err)
    }
  }

  const handleConnect=async()=>{
     await swal({
      title: "Oops can't connect now!",
      text: "feature is coming soon!",
      icon: "info",

    });

  }


  return (
    <Box sx={{ maxWidth: '100%',marginTop:'3rem',padding:5 }}>
      
      { allCanteens.map((item)=>(


<Customcontainer  >
        <TextContainer>
          <CustomBox>
            <img
              src={item.image?item?.image:'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.svg'}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '100px',
                border: '1px solid white',
                display: 'block',
                marginLeft:'25px'
              }}
            />

          </CustomBox>

          <CustomBoxText>

            <Typography variant='h5' sx={{ fontWeight: '700', fontSize: '25px', }}>
              {item?.canteenName}
            </Typography>



            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginBottom:0, color: '#A0A7AB ', }}>
              {item?.city}
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '600', marginBottom: 1, color: '#A0A7AB ', }}>
              {item?.email}
            </Typography>
          </CustomBoxText>
        </TextContainer>


        <CustomButton sx={{}} onClick={handleConnect}>Connect</CustomButton>
      
      </Customcontainer>

))}
      
    
      <Stack spacing={2} sx={{ alignItems: 'center', marginTop: 6 }}>
          <Pagination count={page} onChange={pageChange} />
        </Stack>
    
    </Box>
  );
};



export default ShowAllCanteens