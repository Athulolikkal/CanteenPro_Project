
import { Box, Typography, Stack, Pagination } from '@mui/material'
import { Customcontainer, CustomButton, BookingButton, CustomBox, TextContainer, CustomBoxText, SearchBox, SearchText } from './Style'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useEffect, useState } from 'react';
import axios from '../../../Axios/axios'
import { PackageItem } from '../../../types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

interface storeType {
  userInfo?: {
    userId?: '',
    name?: '',
    email?: '',
  }
}



const ShowAllPackages = () => {
  const [page, setPage] = useState<number>()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [searchValue, setSearchValue] = useState<string>('')
  const [packages, setPackages] = useState<PackageItem[]>([])
  const navigate = useNavigate()
  const userData = useSelector((state: storeType) => state?.userInfo)
  // console.log(userData, 'userdata is that');
 
  const fetchAllPackages = async (pageNumber: number) => {
    axios.get(`/canteen/fetchallpackages?pageNumber=${pageNumber}&&searchValue=${searchValue}`).then((response) => {
      console.log(response);
      if (response?.data) {
        setPage(response?.data?.pages)
        setCurrentPage(pageNumber);
        const details = response?.data?.packages
        details ? setPackages(details) : setPackages([])
      }
    }).catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchAllPackages(1)
  }, [searchValue])

  const pageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
    try {
      // console.log(page);
      fetchAllPackages(page)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);

  }

  const handleView = (packageId: string | undefined) => {
    // console.log(packageId, 'packageId is this')
    navigate(`/view/${packageId}`)
  }

  const handleSave = async (packageId: string | undefined,
    canteenId: string | undefined, total: number | undefined,
    image: string | undefined) => {

    try {
      const willDelete = await swal({
        title: "Do you want to Save?",
        text: "Are you sure do you want to save this package?",
        icon: "info",

      });

      if (willDelete) {


        const userId = userData?.userId
        const source = 'package'
        const savedData = {
          userId,
          packageId,
          canteenId,
          source,
          total,
          image
        }

        axios.post('/wish/addtowish', savedData).then((response) => {
          // console.log(response.data);
          if (response?.data?.status === true) {

            swal({
              title: "Saved!",
              text: "Your Package is saved. You can book this package from on my wish within 10 days!",
              icon: "success",
            });
          } else {
            swal({
              title: "Error!",
              text: "This Package is already in On-My-Wish!",
              icon: "warning",
            });
          }



        }).catch((err) => console.log(err))
        // console.log(savedData, 'saveClicked and data got')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Box sx={{ maxWidth: '100%', padding: 5 }}>
      <Box sx={{ marginTop: '4rem' }} >


        <SearchBox >
          <SearchText
            label="Search"
            variant="outlined"
            placeholder='search......'
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </SearchBox>


        <Box sx={{ marginTop: '3rem' }}>

          {packages.length === 0 ?
            (<Typography sx={{ textAlign: 'center', marginTop: 5, color: '#000339' }}>
              Search results not found.....Try another one
            </Typography>)
            :

            (
              packages.map((item) => (
                <Customcontainer >

                  <TextContainer>
                    <CustomBox>
                      <img
                        src={item?.image}
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

                      <Typography variant='h6' sx={{ fontWeight: '800', fontSize: '25px' }}>
                        <CurrencyRupeeIcon fontSize='small' />  {item?.total}
                      </Typography>



                      <Typography sx={{ fontSize: '16px', fontWeight: '600', marginBottom: 0, color: '#A0A7AB ', }}>
                        {item?.canteenId?.canteenName}
                      </Typography>
                      <Typography sx={{ fontSize: '16px', fontWeight: '600', marginBottom: 0, color: '#A0A7AB ', }}>
                        {item?.category}
                      </Typography>
                      <Typography sx={{ fontSize: '16px', fontWeight: '600', marginBottom: 1, color: '#A0A7AB ', }}>
                        {item?.canteenId?.city}
                      </Typography>
                    </CustomBoxText>
                  </TextContainer>


                  <CustomButton sx={{}} onClick={() => handleView(item?._id)}>View</CustomButton>
                  <BookingButton sx={{}} onClick={() => handleSave(item?._id, item?.canteenId?._id, item?.total, item?.image)} >Save</BookingButton>

                </Customcontainer>
              ))
            )



          }
        </Box>
      </Box>

      <Stack spacing={2} sx={{ alignItems: 'center', marginTop: 6 }}>
        <Pagination count={page} onChange={pageChange} page={currentPage} />
      </Stack>

    </Box>
  );
};



export default ShowAllPackages