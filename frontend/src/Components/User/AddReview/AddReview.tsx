import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, IconButton, TextField, Tooltip, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from '../../../Axios/axios'
import toast, { Toaster } from 'react-hot-toast';

interface Props {
    userId?: string;
    source?: string;
    packageId?: string;
    username?: string;
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

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-rootSu': {
        borderRadius: '6px',
        // Increase the height by adjusting the padding
        padding: theme.spacing(3), // Adjust the desired padding value
    },
}));

type formValues = {
    Review: string
}

const AddReview: React.FC<Props> = ({ userId, source, packageId, username }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const form = useForm<formValues>()
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit: SubmitHandler<formValues> = async (data) => {
        try {
            const message = data?.Review
            const isReviewAdded = await axios.post('/canteen/addreview', { userId, packageId, username, message })
            if (isReviewAdded?.data?.status === true) {
                handleClose()
                toast('success fully added you opinion', {
                    icon: '👏',
                  });
            }else{
                handleClose()
                toast.error('cant add review......... you already added')
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Toaster
                position="top-left"
                reverseOrder={false}
            />
            <Tooltip title="add your review">
                <IconButton onClick={handleOpen}>
                    <AddCommentIcon />
                </IconButton>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ textAlign: 'center', fontWeight: 700, marginBottom: '1rem' }}>
                        Add Your Review
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <CustomTextField
                            type="text"
                            fullWidth
                            label="Review"
                            placeholder='Add your review'
                            variant="outlined"
                            color="secondary"
                            {...register('Review', {
                                required: 'Review is required',
                                // pattern: {
                                //     value: /^(?!\s)[A-Za-z\s'\\-!@#$%^&*()_+=[\]{}|\\;:'",.<>/?`~]+$/u,
                                    
                                //     message: 'only accept letters'
                                // },
                                minLength: {
                                    value: 3,
                                    message: 'Review must be at least 3 characters long',
                                },
                                maxLength: {
                                    value: 80,
                                    message: 'Review cannot exceed 80 characters',
                                },
                                validate: (value) => !value.startsWith(' ') ||
                                    "can't start with white spaces"
                            })}

                            error={!!errors.Review}
                            helperText={errors?.Review?.message}

                        />
                        {source === 'package' ? <Button type='submit' variant="contained" fullWidth size="large" sx={{ marginTop: '1rem' }}>
                            Add Review
                        </Button> : <Button variant="contained" fullWidth size="large" sx={{ marginTop: '1rem' }}>
                            Cant add Review
                        </Button>}
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default AddReview