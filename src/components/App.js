import React, {useState} from "react"
import { Grid } from '@material-ui/core';
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

    
    return <div className="app">
       
        <Header />
        <Textfield onAdd={addNote}/>
        <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0} justify="center">
        {notes.map((noteItem) => {
            return <Note
            title={noteItem.title}
            content={noteItem.content}
            />
        })}
         </Grid>
        </Grid>
        <Footer />



        
    </div>
}

export default App