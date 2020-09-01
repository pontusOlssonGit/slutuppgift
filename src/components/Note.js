import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'


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
        
        </Card>
        
    )
}

export default Note