import React, {useState} from "react"
import { Grid, Container } from '@material-ui/core';
import Header from "./Header.js"
import Footer from "./Footer.js"
import Note from "./Note.js"
import Textfield from "./AddNote.js"


function App(){

    const[notes, setNotes] = useState([])

    function addNote(newNote){
        setNotes(prevNotes => {
           return [...prevNotes, newNote]
        })
    }

    return( 
    
        <div className="app">
        
        <Grid container direction="column">
            <Grid item><Header /></Grid>
        </Grid>

        
        <Container maxWidth="lg">
        
        <Textfield onAdd={addNote}/>
       
        <Grid container direction="row">
        {notes.map((noteItem) => {
            return (
            <Grid item xs={12} sm={6} lg={4}>
            <Note
            title={noteItem.title}
            content={noteItem.content}
            />
            </Grid>
            )
            
        })}
        </Grid>

        <Footer />
        
        </Container>
    </div>
    )
}

export default App