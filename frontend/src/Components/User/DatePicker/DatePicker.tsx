import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';

interface Props {
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null | undefined>>;
}

const DatePicking: React.FC<Props> = ({ setStartDate, setEndDate }) => {
  const currentDate = Date.now();
  const [value, setValue] = useState<Dayjs | null>(dayjs(currentDate).add(1, 'day')); // Starting date is one day after the current date

  const handleEndDateChange = (newValue: Dayjs | null) => {
    const endDate = newValue?.toDate() ?? null;
    setEndDate(endDate);
  };

  const handleStartDateChange = (newValue: Dayjs | null) => {
    const startDate = newValue?.toDate() ?? null;
    setStartDate(startDate);
    setValue(dayjs(startDate).add(1, 'day')); // Reset the end date when the start date changes
  };

  return (
    <>
      <Box sx={{ marginTop: '5rem', width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                  label="StartDate"
                  value={value}
                  onChange={handleStartDateChange}
                  minDate={dayjs(currentDate).add(1, 'day')} // Minimum selectable date (1 day after the current date)
                  maxDate={dayjs(currentDate).add(30, 'day')} // Maximum selectable date (30 days after the current date)
                />
                <DatePicker
                  label="EndDate"
                  value={null} // Reset the end date value when the start date changes
                  minDate={dayjs(value?.toDate()).add(1, 'day')} // Minimum selectable date is 1 day after the start date
                  maxDate={dayjs(value?.toDate()).add(30, 'day')} // Maximum selectable date is 30 days after the start date
                  onChange={handleEndDateChange}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DatePicking;
