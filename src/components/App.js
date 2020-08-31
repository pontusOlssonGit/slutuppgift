import React from "react"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Note from "./Note.js"
import Textfield from "./Textfield.js"
import notes from "../notes.js"






function App(){
    return <div className="app">
       
        <Header />
        <Textfield/>
        {notes.map(noteItem => (
            <Note
                key = {noteItem.key}
                title = {noteItem.title}
                content = {noteItem.content} 
            />
            
        ))}
        <Footer />
    </div>
}

export default App