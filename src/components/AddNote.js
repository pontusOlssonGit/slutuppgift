import React, { useState } from "react"
import { Button, Input, Card, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


function AddNote(props){

    const styles = {
        root: {
          margin: '0.5rem',
          marginTop: '2rem',
          padding: '2rem',
          textAlign: 'center',
          paddingTop: '1.5rem',
          boxShadow: '0px 0px 20px 2px'
          
        },
        content: {
            width: '12rem',
            margin: '1rem'
        }
      };
      
    const useStyles = makeStyles(styles)
    const classes = useStyles()
    
    const [note, setNote] = useState({
        title: "",
        content: "",
        
        
    })

    function handleChange(event){
        const {name, value} = event.target
        

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }
    function submitNote(event){
        props.onAdd(note)
        setNote({
            title:"",
            content:"",
            
        })
        
        event.preventDefault() //prevent reload of page.
    }
   
    return(
        <Card className = {classes.root}>
            <Grid item xs={12}>     
            <Input className="title" placeholder="Title" id="standard-multiline-static" onChange={handleChange} name="title" value={note.title} autoComplete="off" />
            </Grid> 
            <Grid item xs={12}>
            <Input className={classes.content} placeholder="Notes" multiline rows={1} id="standard-multiline-static" onChange={handleChange} name="content" value={note.content} />
            </Grid>
            <Grid item xs={12}>
            <Button className="submitButton" onClick={submitNote}variant="contained" color="default" >Add Note</Button>
            </Grid>
        </Card>
    )
}

export default AddNote