import {Typography} from '@mui/material'
import {Box} from '@mui/system';
import facebookIcon from '../../../assets/images/317752_facebook_social media_social_icon.png'
import instaIcon from '../../../assets/images/3225191_app_instagram_logo_media_popular_icon.png'
import linkdinIcon from '../../../assets/images/317750_linkedin_icon.png'
import {IconBox,CustomContainer,FooterLink} from './style'
const Footer = () => {
  return (
    <Box sx={{py:15}}>
        <CustomContainer>
            <CustomContainer>
                <Box>
                    <Typography sx={{
                        fontSize:'20px',
                        color:'#1C1C1D',
                        fontWeight:'700',
                        mb:2
                    }}>
                       Products
                    </Typography>

                    <FooterLink>Canteens</FooterLink>
                    <br />
                    <FooterLink>Packages</FooterLink>
                    <br />
                    <FooterLink>Delivery</FooterLink>
                    <br />
                    <FooterLink>Customization</FooterLink>
                </Box>
              
                <Box>
                    <Typography sx={{
                        fontSize:'20px',
                        color:'#1C1C1D',
                        fontWeight:'700',
                        mb:2
                    }}>
                      Resources
                    </Typography>

                    <FooterLink>Canteens</FooterLink>
                    <br />
                    <FooterLink>Homes</FooterLink>
                    <br />
                    <FooterLink>Hotels</FooterLink>
                    <br />
                    <FooterLink>Restaurant</FooterLink>
                </Box>

                <Box>
                    <Typography sx={{
                        fontSize:'20px',
                        color:'#1C1C1D',
                        fontWeight:'700',
                        mb:2
                    }}>
                      CanteenPRO
                    </Typography>

                    <FooterLink>Single ownership</FooterLink>
                    <br />
                    <FooterLink>Terms of use</FooterLink>
                    <br />
                    <FooterLink>Privacy</FooterLink>
                    <br />
                    <FooterLink>Sitemap</FooterLink>
                </Box>
               
                <Box>
                    <Typography sx={{
                        fontSize:'20px',
                        color:'#1C1C1D',
                        fontWeight:'700',
                        mb:2
                    }}>
                      Get in touch
                    </Typography>
                    <Typography sx={{
                        fontSize:'16px',
                        color:'#7A7A7E',
                        fontWeight:'500',
                        mb:2
                    }}>
                     You'll find your daily food, in any style you prefer
                    </Typography>
                   
                   <IconBox>
                    <img src={facebookIcon} alt='facebookIcon' style={{cursor:'pointer',width:'25px'}} />
                    <img src={linkdinIcon} alt='facebookIcon' style={{cursor:'pointer',width:'25px'}} />
                    <img src={instaIcon} alt='facebookIcon' style={{cursor:'pointer',width:'25px'}} />
                   </IconBox>
                   
                </Box>
            </CustomContainer>
        </CustomContainer>
    </Box>
  )
}
export default Footer