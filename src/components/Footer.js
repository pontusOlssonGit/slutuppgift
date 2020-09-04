import React from 'react'
import { BottomNavigation, BottomNavigationAction,Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer(){

    const styles = {
        grid:{
            backgroundColor: '#f0f0f0',
        },
        socialText:{
            textAlign: 'center',
            paddingTop: '1rem',
            backgroundColor: '#f0f0f0'

        }
      };
      
    const useStyles = makeStyles(styles)
    const classes = useStyles()

    return (
        <div class="fixed-bottom">
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.socialText}>
                    Follow us on social media.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <BottomNavigation className={classes.grid}>
                    <BottomNavigationAction showLabel label="Twitter" icon={<TwitterIcon />} />
                    <BottomNavigationAction showLabel label="Facebook" icon={<FacebookIcon />} />
                    <BottomNavigationAction showLabel label="Instagram" icon={<InstagramIcon />} />
                    </BottomNavigation>
                </Grid>
            </Grid>
        </div>
        
    )
}


export default Footer