import * as React from 'react';
// import { styled } from '@mui/material/styles';
import { styled } from "@mui/material/styles";


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import image from '../../../assets/images/Take Away-amico.png'
import AddIcon from '@mui/icons-material/Add';
import { Box, Tooltip } from '@mui/material';
import { categoryType } from '../../../types'
import toast, { Toaster } from 'react-hot-toast';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

type Props = {
  packageId?: string;
  canteenName?: string;
  mainCourse: string[]; // Change the type to required array of strings
  sideCourse?: string[];
  specials?: string[];
  availableTime?: string;
  ratePerDay?: number;
  ratePerMonth?: number;
  category?: string;
  image?: string;
  city?: string;
  menu?: string;
  addToFaviorite: (value: categoryType) => void
}





const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));


const showname = 'cp';

const RecipeReviewCard: React.FC<Props> = ({
  packageId,
  canteenName,
  mainCourse,
  sideCourse,
  specials,
  availableTime,
  ratePerDay,
  ratePerMonth,
  category,
  image,
  city,
  menu,
  addToFaviorite

}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addCategorizedPackageToFaviorite = (
    packageId?: string,
    canteenName?: string,
    mainCourse?: string[],
    sideCourse?: string[],
    specials?: string[],
    availableTime?: string,
    ratePerDay?: number,
    ratePerMonth?: number,
    category?: string,
    image?: string,
    city?: string,


  ) => {

    const details = {
      packageId,
      canteenName,
      mainCourse,
      sideCourse,
      specials,
      availableTime,
      ratePerDay,
      ratePerMonth,
      category,
      image,
      city,

    }
    toast.success("item added")
    addToFaviorite(details)

  }

  const MainCourse = mainCourse?.toString()
  const SideCourse = sideCourse?.toString()
  const Specials = specials?.toString()

  return (

    <BoxContainer>

      <Toaster
        position="top-left"
        reverseOrder={false}
      />

      <Card sx={{ width: 275 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {showname}
            </Avatar>
          }

          title='canteenPro'

        />
        <CardMedia component="img" height="194" image={image} alt="dishimages" />
        <CardContent>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            {canteenName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            food will be availble at: {availableTime}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            Available At: {city}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            {category}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="click here to add this ">
            <IconButton aria-label="add to favorites"
              onClick={() => addCategorizedPackageToFaviorite(
                packageId,
                canteenName,
                mainCourse,
                sideCourse,
                specials,
                availableTime,
                ratePerDay,
                ratePerMonth,
                category,
                image,
                city,
              )}>
              <AddIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title='show more details' sx={{ textAlign: 'center' }}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Tooltip>

        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph sx={{ fontWeight: 800, color: "text.secondary" }}>MainCourse:</Typography>
            <Typography paragraph sx={{ wordWrap: 'break-word', marginTop: 1 }}>
              {MainCourse}
            </Typography>
            <Typography sx={{ fontWeight: 800, color: "text.secondary" }}>SideCourse:</Typography>
            <Typography paragraph sx={{ wordWrap: 'break-word', marginTop: 1 }}>
              {SideCourse}
            </Typography>

            <Typography paragraph sx={{ fontWeight: 800, color: "text.secondary" }}>Specials:</Typography>
            <Typography paragraph sx={{ wordWrap: 'break-word', marginTop: 1 }} >
              {Specials}
            </Typography>
            <Typography >
              Rate perDay:<span style={{ fontWeight: 800, color: "text.secondary", marginLeft: 2 }}>{ratePerDay}</span>
            </Typography>
            <Typography sx={{ marginTop: 1 }}>
              Rate perMonth:<span style={{ fontWeight: 800, color: "text.secondary", marginLeft: 2 }}>{ratePerMonth}</span>
            </Typography>
            <Tooltip title="click here to Add ">
              <IconButton aria-label="add to favorites"
                onClick={() => addCategorizedPackageToFaviorite(
                  packageId,
                  canteenName,
                  mainCourse,
                  sideCourse,
                  specials,
                  availableTime,
                  ratePerDay,
                  ratePerMonth,
                  category,
                  image,
                  city,
                )}>
                <AddIcon />
              </IconButton>
            </Tooltip>

          </CardContent>
        </Collapse>
      </Card>
    </BoxContainer>



  );
}
export default RecipeReviewCard;