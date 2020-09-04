import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import TodayIcon from '@material-ui/icons/Today';
import { makeStyles } from '@material-ui/core/styles';



function Header(){

  const styles = {
    root: {
      background: '#f0f0f0',
      borderBottom: '10px solid grey'
      
    },
    font: {
      fontSize: '2rem',
      color: 'black',
      fontFamily: 'Comfortaa',
      paddingRight: '1rem'
    },
    icon: {
      fontSize: '2.5rem',
      color: '#444'
    }
  };
  
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  return(
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography className={classes.font}>Notes.js</Typography>
        <TodayIcon className={classes.icon}/>
      </Toolbar>

    </AppBar>
  )

}
export default Header



