import React, {useState } from "react";
import Header from "./header"
import Footer from "./footer"
import Note from "./note"
// import notes from "../notes"
import CreateArea from "./createarea"

// function createNotes(noteItem) {
//     return <Note 
//         key={noteItem.key}
//         title={noteItem.title}
//         content={noteItem.content}
//     />

// }

function App() {

    const [notes, setNotes] = useState([])

    function addNote(newNote) {
        console.log(newNote)
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }

    function deleteNote(id) {
        // console.log("Delete clicked")
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id

            })
        })
    }


    return <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => {
            return <Note 
                key={index}
                id={index}
                title= {noteItem.title}
                content = {noteItem.content}
                onDelete={deleteNote}
            />
        })}
        {/* <Note key= {1} title="Note title" content="Note content" /> */}
        {/* <Note 
            title="Chinki chhurimaar"
            content="ATTENTION COMRADES!!!! 同志們注意了 THIS IS TO INFORM YOU THAT YOU MUST SUBMIT YOURSELF TO THE CHINESE COMMUNIST PARTY!!!!! "
        /> */}
        <Footer />
        
    </div>
}

export default App