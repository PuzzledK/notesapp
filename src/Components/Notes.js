import React from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/NoteContext";
import NoteItem from "./NoteItems";
const Notes = () => {
  //TAKING CONTEXT FROM noteContext
  let context = useContext(noteContext);
  //Destructuring notes and setNotes from context
  const {notes,addNote} = context;

  return (
  <div className="row my-6">
    <h1>Your Notes</h1>
    {notes.map((note)=>{
        return <NoteItem title={note.title} description={note.description} key={note._id}/>
    })}
  </div>)
}
export default Notes