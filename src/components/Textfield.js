import React from "react"
import { TextField } from '@material-ui/core';

function Textfield(){
    return(
        <form className="textfield" noValidate autoComplete="off">
  
  <TextField id="filled-basic" label="Write a note" variant="filled" fullWidth="true" />
  
</form>
    )

}


export default Textfield