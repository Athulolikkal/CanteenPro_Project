import { ChangeEvent, useEffect, useState } from 'react'
// import CustomizationBanner from '../CustomizationBanner/CustomizationBanner'
import { Box, Button, Pagination, Stack, Typography } from '@mui/material'
import { Container, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { SearchBox, SearchText, ContaierBox } from './Style'
import SearchIcon from '@mui/icons-material/Search';
import ListDishes from '../ListDishes/ListDishes'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPackages } from '../../../redux/canteenPackages/allPackages';
import { AppDispatch } from '../../../redux/store';
import { PackageItem, categoryType } from '../../../types';
import Chip from '@mui/material/Chip';
import swal from 'sweetalert';
// import toast, { Toaster } from 'react-hot-toast';
// import { Launch } from '@mui/icons-material';
import axios from '../../../Axios/axios'






const BuildCanteenComponent = () => {
  const [menu, setMenu] = useState<string>('breakfast')
  const [searchValue, setSearchValue] = useState<string>('')
  const [values, setValues] = useState<any>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [breakfast, setBreakfast] = useState<categoryType>()
  const [lunch, setLunch] = useState<categoryType>()
  const [dinner, setDinner] = useState<categoryType>()
  const [total, setTotal] = useState<number>()

  const dispatch = useDispatch<AppDispatch>();
  const packages = useSelector((state: any) => state.allPackages);
  const userInfo = useSelector((state: any) => state.userInfo);
  const userId = userInfo.userId
  const showPackages= packages?.data?.showPackages || [];

  const pageNumber = packages?.data?.numberOfPages || 0

  useEffect(() => {
    dispatch(getAllPackages({ pageNumber: 1, menu, searchValue }));
  }, [menu, searchValue, dispatch]);

  useEffect(() => {
   
   
    setValues(showPackages);
  }, [showPackages]);


  const handleChange = (event: SelectChangeEvent<any>) => {
    const selectedValue = event.target.value as string;
    setMenu(selectedValue);

    // console.log(selectedValue);
  }
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);


  }
  const pageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
    try {
      // console.log(page);
      dispatch(getAllPackages({ pageNumber: page, menu, searchValue }));
      setCurrentPage(page);
    } catch (err) {
      console.log(err)
    }
  }

  const addToFaviorite = (value: categoryType) => {
    menu === 'breakfast' ? setBreakfast(value) :
      menu === 'lunch' ? setLunch(value) :
        setDinner(value)

  }
  const handleSave = async () => {
    try {
      const willSave = await swal({
        title: "Do you want to Save?",
        text: "Are you sure do you want to save this package?",
        icon: "info",

      });

      if (willSave) {
        const savedPackage = {
          breakfast: breakfast,
          lunch: lunch,
          dinner: dinner,
          source: 'customized',
          userId: userId,
          totalPerDayRate: (breakfast?.ratePerDay || 0) + (lunch?.ratePerDay || 0) + (dinner?.ratePerDay || 0)
        }
        console.log(savedPackage);
        const customizedPackages = await axios.post('/wish/addtowish', savedPackage)
        console.log(customizedPackages.data);
        if (customizedPackages.data.status === true) {
          swal({
            title: "Saved!",
            text: "Your Package is saved. You can book this package from on my wish within 10 days!",
            icon: "success",
          });
          
          setBreakfast(undefined)
          setDinner(undefined)
          setLunch(undefined)


        } else {
          swal({
            title: "Error!",
            text: "This Package is already in On-My-Wish!",
            icon: "warning",
          });
        }
      }


    } catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <Box>
        <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {breakfast ? <Chip label={`breakfast selected from:${breakfast?.canteenName} perday at:${breakfast?.ratePerDay}`} variant='outlined' onDelete={() => setBreakfast(undefined)} /> : ''}
            {lunch ? <Chip label={`lunch selected from:${lunch?.canteenName} perday at:${lunch?.ratePerDay}`} variant='outlined' onDelete={() => setLunch(undefined)} /> : ''}
            {dinner ? <Chip label={`dinner selected from:${dinner?.canteenName} perday at:${dinner?.ratePerDay}`} variant='outlined' onDelete={() => setDinner(undefined)} /> : ''}

            {
              (breakfast || lunch || dinner) ? (
                <Typography variant='body2' sx={{ textAlign: 'center', fontWeight: 700, fontStyle: 'italic', opacity: '0.5' }} >Total PerDay Rate Of Selected Items:
                  <span style={{ fontSize: '20px', marginLeft: '5px', color: '#4F5361' }}>{((breakfast?.ratePerDay || 0) + (lunch?.ratePerDay || 0) + (dinner?.ratePerDay || 0))}</span>

                </Typography>
              ) : (
                <Typography></Typography>
              )
            }

            {breakfast || lunch || dinner ? <Button variant='outlined' sx={{ marginTop: 1 }} onClick={handleSave}>add to on my wish</Button> : ''}
          </Box>
        </Stack>

        <Box>
          <Box>
            <Container sx={{ marginTop: '3rem', marginBottom: '2rem' }}>
              <FormControl>
                <Select value={menu} onChange={handleChange} >
                  <MenuItem value="breakfast">Breakfast</MenuItem>
                  <MenuItem value="lunch">Lunch</MenuItem>
                  <MenuItem value="dinner">Dinner</MenuItem>
                </Select>
              </FormControl>

            </Container>
          </Box>

        </Box>
        {/* category box end---- */}


        {/* searchbox------ */}
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
        {/* searchbox------ */}


        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

          <ContaierBox sx={{ display: 'flex', margin: '2rem', justifyContent: 'space-evenly', gap: '1rem' }}>

            {values.map((item: any) => (





              <ListDishes
                packageId={item?._id}
                canteenName={item?.canteenId?.canteenName}
                mainCourse={item?.breakfast?.mainCourse || item?.lunch?.mainCourse || item?.dinner?.mainCourse}
                sideCourse={item?.breakfast?.sideCourse || item?.lunch?.sideCourse || item?.dinner?.sideCourse}
                specials={item?.breakfast?.specials || item?.lunch?.specials || item?.dinner?.specials}
                availableTime={item?.breakfast?.availableTime || item?.lunch?.availableTime || item?.dinner?.availableTime}
                ratePerDay={item?.breakfast?.ratePerDay || item?.lunch?.ratePerDay || item?.dinner?.ratePerDay}
                ratePerMonth={item?.breakfast?.ratePerMonth || item?.lunch?.ratePerDay || item?.dinner?.ratePerMonth}
                category={item?.category}
                image={item?.image}
                city={item?.canteenId?.city}
                menu={menu}
                addToFaviorite={addToFaviorite}
              />


            ))}

          </ContaierBox>




        </Box>



        <Stack spacing={2} sx={{ alignItems: 'center', marginTop: 6, marginBottom: 4 }}>
          <Pagination count={pageNumber} onChange={pageChange} page={currentPage} />
        </Stack>
      </Box>
    </>
  )
}

export default BuildCanteenComponent