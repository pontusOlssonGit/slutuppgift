import React, {useState} from "react"
import { Grid, Container } from '@material-ui/core';
import Header from "./Header.js"
import Footer from "./Footer.js"
import Note from "./Note.js"
import Textfield from "./AddNote.js"
import { makeStyles } from '@material-ui/core/styles'


function App(){

    const[notes, setNotes] = useState([])

    const styles = {
        margin: {
          marginBottom: '17vh'
        },
    
      };
      
    const useStyles = makeStyles(styles)
    const classes = useStyles()

    function addNote(newNote){
        if(newNote.title ==="" || newNote.content ===""){
            return alert("Fill out the form.")
        }
        else{
        setNotes(prevNotes => {
            
           return [...prevNotes, newNote]
            
        })
        }
    }

    function deleteNote(id){
        
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index) =>{
                console.log(prevNotes[id]);
                return index !== id 
                
                
            })
        })
    }
    return( 
    
        <div className="app">
        
        <Grid container direction="column">
            <Grid item><Header /></Grid>
        </Grid>



        <Container maxWidth="xs">
        <Textfield onAdd={addNote}/>
        </Container>
        <Container maxWidth="lg">
        
        
       
        <Grid container direction="row" className={classes.margin}>
        {notes.map((noteItem, index) => {
            return (
            <Grid item xs={12} sm={6} lg={4}>
            <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            />
            </Grid>
            )
            
        })}
        </Grid>
        
        </Container>
        <Footer />
    </div>
    )
}

export default App