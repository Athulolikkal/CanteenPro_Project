import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { PropertiesTextBox } from './Style'
import PackageListing from '../PackageListing/PackageListing';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios,{setAccessToken} from '../../../Axios/axios'
import { useSelector } from 'react-redux';
import { PackageItem } from '../../../types'

interface storeType {
  canteenInfo?: {
    canteenId?: ''
    canteenName?: ''
    email?: '',
    image?: ''
  }
}


const PackageListContainer = () => {
  const [PackagesList, setPackages] = useState<PackageItem[]>([]);
  const [page, setPage] = useState<number>()
  const canteen = useSelector((state: storeType) => state?.canteenInfo)
  // console.log(canteen?.canteenId);
  const navigate = useNavigate()
  // console.log(PackagesList)



  const getPackages = async (pageNumber: number) => {
    try {
    
      const url = `/canteen/getpackages?id=${canteen?.canteenId}&pageNumber=${pageNumber}`;
      setAccessToken('canteen')
      const packages = await axios.get(url);
      // console.log(packages, 'packages are');
      const allPackages = packages?.data?.response?.showPackages;
      setPage(packages?.data?.response?.page)
      if (allPackages) {
        setPackages(allPackages);
      } else {
        setPackages([]);
      }
    } catch (err) {
      console.log(err, 'error found');
    }
  };


  useEffect(() => {
    getPackages(1)
  }, []);

  const pageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
    try {
      // console.log(page);
      getPackages(page)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <Box sx={{ mt: 5, backgroundColor: '#F5FAFE', py: 10 }}>

      <Container>

        <Button variant="outlined" startIcon={<AddIcon style={{ color: '#17275F' }} />} style={{ color: '#17275F', borderColor: '#17275F' }} onClick={() => navigate('/canteen/addpackages')}>
          Add
        </Button>

        <PropertiesTextBox>
          <Typography sx={{ color: '#000339', fontSize: '35px', fontWeight: 'bold', paddingBottom: 2, paddingTop: 2 }}>
            All Your Active Packages
          </Typography>

        </PropertiesTextBox>


        {PackagesList.length === 0 ? (
          <Typography sx={{ textAlign: 'center', marginTop: 5, color: '#000339' }}>
            No Packages.....Add your packages
          </Typography>
        ) : (
          PackagesList.map((item) => <PackageListing packageId={item._id} canteenId={item.canteenId} total={item.total} canteenName={canteen?.canteenName} image={item?.image} status={item?.status} />)
        )}

        <Stack spacing={2} sx={{ alignItems: 'center', marginTop: 6 }}>
          <Pagination count={page} onChange={pageChange} />
        </Stack>
      </Container>



    </Box>
  )
}

export default PackageListContainer