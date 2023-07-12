import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CustomButton, ModalBox } from './style'
import { TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from '../../../Axios/axios'
import Axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { addUserInfo } from '../../../redux/user/userInfoReducer'
import { useDispatch } from 'react-redux';

interface formValues {
  Email: string;
  image?: FileList | null | undefined;
}

interface Props {
  canteenId: string | undefined;
  canteenEmail: string | undefined;
  setCanteenEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  getTotalCanteenPackages: () => Promise<void>
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
};

const BasicModal: React.FC<Props> = ({ canteenId, canteenEmail, setCanteenEmail, setImage, getTotalCanteenPackages }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const form = useForm<formValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [email, SetEmail] = React.useState(canteenEmail)
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<formValues> = async (data) => {
    try {
      const email = data?.Email
      const file = data?.image?.[0]
      const isemail = email ? true : false
      const isfile = file ? true : false


      if (isemail || isfile) {
        console.log(data);

        if (file) {
          const response = await axios.get('/service/s3service')
          const url = response?.data?.url
          // console.log(url);
          await Axios.put(url, file, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          })
          const imageUrl = url.split('?')[0]
          console.log(imageUrl, 'image url is this')
          const changeImage = await axios.patch('/allcanteen/editprofileimage', { imageUrl, canteenId })
          console.log(changeImage, 'changedimage');
          getTotalCanteenPackages()
          dispatch(addUserInfo({
            canteenId: changeImage?.data._id,
            canteenName: changeImage?.data.canteenName,
            email: changeImage?.data.email,
            image: changeImage?.data.image,
            phone: changeImage?.data.phonenumber
          }))
          setImage(changeImage?.data.image)
        }

        setOpen(false)



      }
      else {

        toast.error("Nothing have to edit")
      }
    } catch (err) {
      // console.log(err);
      toast.error("An error occured...... Do after some time.......")
    }



  }

  return (
    <div>




      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <ModalBox>
        <CustomButton onClick={handleOpen}>Edit Profile</CustomButton>
      </ModalBox>

      <Toaster
        position="top-left"
        reverseOrder={false}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <TextField
                type='text'
                fullWidth
                label='Email'

                placeholder='Enter the Email'
                variant='outlined'
                color='secondary'
                size='small'

                {...register('Email', {
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                    message: 'Enter a valid email address'
                  }
                })}
                error={!!errors.Email}
                helperText={errors?.Email?.message}
              />

            </Box>
            <Box>

              <input
                type="file"
                id="image-upload-input"
                {...register("image")}
                style={{ display: "none" }}
              />
              <label htmlFor="image-upload-input">
                <Button
                  variant="outlined"
                  component="span"
                  sx={{ marginTop: 2, borderColor: '#4B6190', color: '#4B6190' }}
                >
                  Update Profile Image
                </Button>
              </label>
              {form.watch("image") && (
                <Typography variant="body2">
                  Selected Image: {(form.watch("image") as FileList)[0]?.name}
                </Typography>
              )}
            </Box>
            <Button type='submit' variant="contained" sx={{ marginTop: 4, width: '100%', padding: 1.5, background: '#4B6190' }}>
              Edit
            </Button>

          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal