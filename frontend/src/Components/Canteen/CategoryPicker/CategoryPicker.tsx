import React, { useState } from 'react';
import { Box, Container, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

interface Props {
    setMenu: React.Dispatch<React.SetStateAction<string>>
    setSelectedDate: React.Dispatch<React.SetStateAction<string | undefined>>
}


const CategoryPicker: React.FC<Props> = ({ setMenu, setSelectedDate }) => {
    const currentDate = Date.now();
    const [category, setCategory] = useState<string>('breakfast');
    const [isDate, setDate] = useState<Dayjs | null>(dayjs(currentDate));

    const handleChange = (event: SelectChangeEvent<string>) => {
        const selectedValue = event.target.value as string;
        
        setCategory(selectedValue);
        setMenu(selectedValue)
    };

    const handleDate = (newDate: Dayjs | null) => {
        setDate(newDate)
        const dateis = newDate?.toString()
        setSelectedDate(dateis)
    }
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                    <Container sx={{ marginTop: '23%', marginBottom: '2rem' }}>
                        <FormControl>
                            <Select value={category} onChange={handleChange}>
                                <MenuItem value="breakfast">Breakfast</MenuItem>
                                <MenuItem value="lunch">Lunch</MenuItem>
                                <MenuItem value="dinner">Dinner</MenuItem>
                            </Select>
                        </FormControl>
                    </Container>
                </Box>

                <Box>
                    <Container sx={{ marginTop: '10%', marginBottom: '2rem' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    value={isDate}
                                    onChange={handleDate}
                                    label={isDate?.format('YYYY-MM-DD')}
                                    minDate={dayjs(currentDate)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default CategoryPicker;
