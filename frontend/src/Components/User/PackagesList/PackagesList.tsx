import { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material';
import RowPost from '../../User/RowPost/RowPost';
import { PropertiesBox, PropertiesTextBox, } from './Style'
import axios,{setAccessToken} from '../../../Axios/axios';
import { PackageItem } from '../../../types';




const PackagesList = () => {
    const [allPakckages, setAllpackages] = useState<PackageItem[]>([]);

    useEffect(() => {
        const getAllPackages = async () => {
            try {
                setAccessToken('user')
                // console.log(axios.defaults.headers.common['Authorization'],'i got resultt');
                const allPackages = await axios.get('canteen/allpackages')
                // console.log(allPackages.data.response);
                const packages = allPackages.data.response
                packages ? setAllpackages(packages) : setAllpackages([])
            } catch (err) {
                console.log(err, 'error on fetching all packages');
            }
        }

        getAllPackages();
    }, [])

    const vegItems = allPakckages.filter((item) => item?.category === 'veg')
    const nonVegItems = allPakckages.filter((item) => item?.category === 'nonveg')
    const premiumPackages = allPakckages.filter((item) => item?.total !== undefined && item?.total > 3500);



    return (
        <Box sx={{ mt: 5, backgroundColor: '#F5FAFE', py: 10 }}>
            <Container>
                <PropertiesTextBox>
                    <Typography sx={{ color: '#000339', fontSize: '45px', fontWeight: 'bold' }}>
                        Our Plans
                    </Typography>
                    <Typography sx={{ color: '#5A6473', fontSize: '16px', fontWeight: 'bold', mt: 1 }}>
                        Every packages you looking for is here.........!
                    </Typography>
                </PropertiesTextBox>

                <Typography sx={{ color: '#000339', fontSize: '25px', fontWeight: 'bold', textAlign: 'center', mt: 8 }}>
                    Non-Veg Packages
                </Typography>

                <PropertiesBox>
                    {
                        nonVegItems.map((property) =>
                        (
                            <RowPost
                                packageId={property._id}
                                img={property?.image}
                                name={property?.canteenId?.canteenName}
                                city={property?.canteenId?.city}
                                price={property?.total}
                                category={property?.category}
                            />
                        )
                        )
                    }
                </PropertiesBox>

                <Typography sx={{ color: '#000339', fontSize: '25px', fontWeight: 'bold', textAlign: 'center', mt: 8 }}>
                    Veg Packages
                </Typography>

                <PropertiesBox>
                    {
                        vegItems.map((property) =>
                        (
                            <RowPost
                                packageId={property._id}
                                img={property?.image}
                                name={property?.canteenId?.canteenName}
                                city={property?.canteenId?.city}
                                price={property?.total}
                                category={property?.category}
                            />
                        )
                        )
                    }
                </PropertiesBox>

                <Typography sx={{ color: '#000339', fontSize: '25px', fontWeight: 'bold', textAlign: 'center', mt: 8 }}>
                    Premium Packages
                </Typography>

                <PropertiesBox>
                    {
                        premiumPackages.map((property) =>
                        (
                            <RowPost
                                packageId={property._id}
                                img={property?.image}
                                name={property?.canteenId?.canteenName}
                                city={property?.canteenId?.city}
                                price={property?.total}
                                category={property?.category}
                            />
                        )
                        )
                    }
                </PropertiesBox>









            </Container>

        </Box>
    )
}

export default PackagesList