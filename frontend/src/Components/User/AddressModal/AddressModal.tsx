import * as React from 'react';
import { Box, TextField, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validateSchema } from './ValidateSchema';
import axios from '../../../Axios/axios'
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { bookingAddress } from '../../../types';

interface formValues {
  Name: string;
  Phonenumber: number;
  City: string;
  Building: string;
  District: string;
  Street: string;
  Pincode: string;
  userId?: string;
}
interface storeType {
  userInfo?: {
    userId?: '',
    name?: '',
    email?: ''
  }
}

interface Props{
  userDataFunction:() => void;
  userAddress?:bookingAddress
}


const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  marginLeft: '1rem'
};



const BasicModal:React.FC<Props>=({userDataFunction,userAddress})=> {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userData = useSelector((state: storeType) => state.userInfo)
  const userId = userData?.userId
  const form = useForm<formValues>();
  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;
  //----------------------------
  const onSubmit: SubmitHandler<formValues> = async (data) => {

    data.userId = userId
    console.log(data, ':is');
    axios.put('/user/adduseraddress', data).then((response) => {
      if (response.data.status === true) {
        toast('Address Added', {
          icon: '👏',
        });
        userDataFunction()
        handleClose()
      }
    }).catch((err) => console.log(err))
  };


  return (
    <div>
      <Toaster
        position="top-left"
        reverseOrder={false}
      />

      {userAddress?<Button onClick={handleOpen}>Edit Booking Address</Button>:
     <Button onClick={handleOpen}>Add Booking Address</Button> }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom: '2rem', textAlign: 'center', fontWeight: 700 }}>
            Add Your Booking Address
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <TextField
                type="text"
                fullWidth
                // value={userAddress?.Name}
                label="Name"
                placeholder="Enter your full name"
                variant="outlined"
                color="secondary"
                size="small"
                {...register('Name', {
                  required: 'name is required',
                  pattern: {
                    value: /^(?!\s)[A-Za-z\s'-]+$/,
                    message: 'only accept letters',
                  },
                  minLength: {
                    value: 3,
                    message: 'Name must be at least 3 characters long',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Name cannot exceed 30 characters',
                  },
                  validate: (value: string) => !value.startsWith(' ') || "can't start with white spaces",
                })}
                error={!!errors.Name}
                helperText={errors?.Name?.message}
              />

              <TextField
                type="text"
                fullWidth
                label="Phonenumber"
                // value={userAddress?.Phonenumber}
                placeholder="Phone number"
                variant="outlined"
                color="secondary"
                size="small"
                {...register('Phonenumber', {
                  required: 'phone number is required',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Please enter a valid phone number',
                  },
                })}
                error={!!errors.Phonenumber}
                helperText={errors?.Phonenumber?.message}
              />

              <TextField
                type="text"
                fullWidth
                label="Building"
                // value={userAddress?.Building}
                placeholder="Enter the building address details"
                variant="outlined"
                color="secondary"
                size="small"
                {...register('Building', {
                  required: 'Building address is required',
                  pattern: {
                    value: /^(?!\s)[A-Za-z\s'-]+$/,
                    message: 'only accept letters',
                  },
                  minLength: {
                    value: 3,
                    message: 'building address must be at least 3 characters long',
                  },
                  maxLength: {
                    value: 50,
                    message: 'building address cannot exceed 50 characters',
                  },
                  validate: (value: string) => !value.startsWith(' ') || "can't start with white spaces",
                })}
                error={!!errors.Building}
                helperText={errors?.Building?.message}
              />

              <TextField
                type="text"
                fullWidth
                label="Street"
                // value={userAddress?.Street}
                placeholder="Enter the street name"
                variant="outlined"
                color="secondary"
                size="small"
                {...register('Street', { ...validateSchema })}
                error={!!errors.Street}
                helperText={errors?.Street?.message}
              />

              <TextField
                type="text"
                fullWidth
                label="City"
                // value={userAddress?.City}
                placeholder="Enter the city name"
                variant="outlined"
                color="secondary"
                size="small"
                {...register('City', { ...validateSchema })}
                error={!!errors.City}
                helperText={errors?.City?.message}
              />

              <TextField
                type="text"
                fullWidth
                // value={userAddress?.District}
                label="District"
                placeholder="Enter the state name"
                variant="outlined"
                color="secondary"
                size="small"
                {...register('District', { ...validateSchema })}
                error={!!errors.District}
                helperText={errors?.District?.message}
              />

              <TextField
                type="text"
                fullWidth
                label="Pincode"
                // value={userAddress?.Pincode}
                placeholder="Please enter your pincode"
                variant="outlined"
                color="secondary"
                size="small"
                {...register('Pincode', {
                  required: 'pincode is required',
                  pattern: {
                    value: /^[1-9]\d{5,5}$/,
                    message: 'Please enter a valid pincode',
                  },
                })}
                error={!!errors.Pincode}
                helperText={errors?.Pincode?.message}
              />
              <Box sx={{ display: 'flex' }}>
                <Button type="submit">Save</Button>
                <Button onClick={handleClose}>Cancel</Button>
              </Box>

            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default  BasicModal