import React, { useState } from "react"
import { Button, Input,} from '@material-ui/core';

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
            <Input className="title" placeholder="Title" onChange={handleChange} name="title" value={note.title} />
       
            <Input className="content" placeholder="Content" onChange={handleChange} name="content" value={note.content}  />
        
            <Button className="submitButton" onClick={submitNote}variant="contained" color="default" >Add Note</Button>
        </form>
    )
}

export default AddNote