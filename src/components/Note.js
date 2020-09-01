import React from 'react'
import { Card, CardContent, Typography, Checkbox, FormControlLabel} from '@material-ui/core'



function Note (props){

    
    
    
    return (
        
        <Card className="card">

        <CardContent>
        <Typography className="cardContent" color="textSecondary" gutterBottom>
        <h5 className="card-title">{props.title}</h5>
        </Typography>
        <Typography className="cardContent" color="textSecondary" gutterBottom>
        <p className="card-text">{props.content}</p>
        </Typography>
        </CardContent>

        
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="secondary" />}
          label="Delete note"
          labelPlacement="end"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="secondary" />}
          label="Finished"
          labelPlacement="start"
        />
        


        </Card>
        
        
        
        
    )
}

export default Note