import React, { useState } from "react"
import { Button, Input, Grid } from '@material-ui/core';


function AddNote(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
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
        event.preventDefault() //prevent reload of page.
    }

    
    
    return(
        <form className = "form">
        <Grid container spacing={8}>
        
        <Grid container item lg={12} spacing={3} justify="center">
            <Input placeholder="Title" onChange={handleChange} name="title" value={note.title} />
        </Grid>
        <Grid container item lg={12} spacing={3} justify="center">
            <Input placeholder="Content" onChange={handleChange} name="content" value={note.content}  />
        </Grid>
         <Grid container item lg={12} spacing={3} justify="center">
            <Button onClick={submitNote}variant="contained" color="default" >Add Note</Button>
         </Grid>
        
        </Grid>
        </form>
  
   
  
       

    )

}


export default AddNote