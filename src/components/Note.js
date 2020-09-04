import React from 'react'
import { Card, CardContent, Typography, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'



function Note (props){
    const styles = {
        root: {
          margin: '1rem',
          textAlign: 'center',
          paddingBottom: '1rem',
          boxShadow: '0px 0px 20px 2px',
        },
    
      };
      
    const useStyles = makeStyles(styles)
    const classes = useStyles()

    function handleDelete(){
        props.onDelete(props.id)   
    }
    
    return (
        
        <Card className={classes.root}>
            <CardContent>
                <Typography className="cardContent" color="textSecondary" gutterBottom>
                    <h5 className="card-title">{props.title}</h5>
                </Typography>
                <Typography className="cardContent" color="textSecondary" gutterBottom>
                    <p className="card-text">{props.content}</p>
                </Typography>
            </CardContent>
            <Button onClick ={handleDelete}><DeleteIcon />DELETE</Button>
        </Card>
    )
}

export default Note