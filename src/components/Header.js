import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import TodayIcon from '@material-ui/icons/Today';



const Header = () =>{
  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">Notie.js</Typography>
        <TodayIcon/>
      </Toolbar>

    </AppBar>
  )

}
export default Header



