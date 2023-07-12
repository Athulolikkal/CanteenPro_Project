import { Box, styled, Typography } from '@mui/material';

export const CardContainer = styled(Box)(({ theme }) => ({
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    width: 200,
    [theme.breakpoints.down('md')]: {
        width: 150,
    },
}));

export const CardImage = styled('img')({
    marginTop: '2rem',
    width: '100%',
    height: 300,
    objectFit: 'cover',
    marginBottom: 8,
    borderRadius: '0.5rem',
    "&:hover": {

        transform: 'scale(1.1)',
        transition: 'transform 0.3s ease-in-out',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        opacity: 0.8,
        borderRadius: '0.5rem',
    },

});

export const TextHeader = styled(Typography)({
    fontSize: "24px",
    color: '#4F5361',
    fontWeight: 'bold',
    cursor: 'pointer',
    textAlign: 'center',
    "&:hover": {
        color: 'black',
    },
});