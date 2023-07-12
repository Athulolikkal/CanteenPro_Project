import React from 'react'
import { CustomBox, CustomContainer } from './Style'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2'
import { Typography } from '@mui/material';
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props{
  totalVegPackage?:number;
  totalNonPackage?:number;
  customizedBooked?:number;
  packageBooked?:number;
}




const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const DashBoardChart:React.FC<Props> = ({totalVegPackage,totalNonPackage,customizedBooked,packageBooked}) => {
  
  const data = {
    labels: ['Customized', 'Package'],
    datasets: [
      {
        data: [customizedBooked,packageBooked],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2',
          'rgba(255, 99, 132, 0.2)',
  
        ],
        borderColor: [
  
          'rgba(255, 99, 132, 0.2)',
  
          'rgba(54, 162, 235, 0.2)',
        ],
        borderWidth: 1.5,
      }
    ]
  
  };
  const datas = {
    labels: ['Veg', 'Non-Veg'],
    datasets: [
      {
        data: [totalVegPackage,totalNonPackage],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2',
          'rgba(255, 99, 132, 0.2)',
  
        ],
        borderColor: [
  
          'rgba(255, 99, 132, 0.2)',
  
          'rgba(54, 162, 235, 0.2)',
        ],
        borderWidth: 1.5,
      }
    ]
  
  };
  
  
  
  
  return (
    <CustomContainer>
      <CustomBox>
        <Typography variant='h5' sx={{ mt: '3px', fontWeight: 'bold' }}>Total Bookings</Typography>
        <div style={{ height: '90%', width: '90%' }}>
          <Doughnut data={data} options={options} />
        </div>
      </CustomBox>
      <CustomBox>
        <Typography variant='h5' sx={{ mt: '3px', fontWeight: 'bold' }}>Total Packages</Typography>
        <div style={{ height: '90%', width: '90%' }}>
          <Pie data={datas} options={options} />
        </div>
      </CustomBox>
    </CustomContainer>
  )


}

export default DashBoardChart