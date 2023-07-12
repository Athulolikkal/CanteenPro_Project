import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { BookedItem } from '../../../types';
import './Style.css'

interface Props {
  booking: BookedItem[];
  menu: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 ,headerClassName: 'custom-header',},
  {
    field: 'firstName',
    headerName: 'Name',
    width: 150,
    headerClassName: 'custom-header',
  },
  {
    field: 'phonenumber',
    headerName: 'Phone Number',
    width: 150,
    headerClassName: 'custom-header',
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    headerClassName: 'custom-header',
  },
  {
    field: 'startingdate',
    headerName: 'Starting Date',
    width: 150,
    headerClassName: 'custom-header',
  },
  {
    field: 'endingdate',
    headerName: 'Ending Date',
    width: 150,
    headerClassName: 'custom-header',
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 120,
    headerClassName: 'custom-header',
  },
  {
    field: 'pincode',
    headerName: 'Pin code',
    type: 'number',
    width: 120,
    headerClassName: 'custom-header',
  },
  {
    field: 'address',
    headerName: 'Address',
    flex: 1,
    description: 'This column has a value getter and is not sortable.',
   
    minWidth: 400,
    headerClassName: 'custom-header',
  },
  {
    field: 'maincourse',
    headerName: 'Main Courses',
   
    flex: 1,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 250,
    headerClassName: 'custom-header',
  },
  {
    field: 'sidecourse',
    headerName: 'Side Courses',
    flex: 1,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 250,
    headerClassName: 'custom-header',
  },
  {
    field: 'specials',
    headerName: ' Special Courses',
    flex: 1,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 250,
    headerClassName: 'custom-header',
  },
  {
    field: 'sources',
    headerName: 'Selected From ',
    flex: 1,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 150,
    headerClassName: 'custom-header',
  },
];

const DataGridDemo: React.FC<Props> = ({ booking, menu }) => {
  const rows = booking.map((item: any, index) => ({




    id: index + 1,
    firstName: item?.bookingAddress?.Name,
    phonenumber: item?.bookingAddress?.Phonenumber,
    amount: item?.bookingAmount,
    sources: item?.source,
    category: item?.source==='package'?item?.category:item[menu]?.category,

    startingdate: item?.startDate.split('T')[0],
    endingdate: item?.endDate.split('T')[0],

    maincourse: item[menu]?.mainCourse?.toString(),
    sidecourse: item[menu]?.sideCourse?.toString(),
    specials: item[menu]?.specials?.toString(),
    pincode: item?.bookingAddress?.Pincode,
    address: `${item?.bookingAddress?.Building}, ${item?.bookingAddress?.Street}, ${item?.bookingAddress?.City}, ${item?.bookingAddress?.District}` || '',
  }));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center',padding:3}}>
     <Box sx={{ height: 400, width: '100%'}}>

        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          // pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Box>
    </Box>
  );
};

export default DataGridDemo;




