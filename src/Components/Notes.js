import React, { useEffect,useState } from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/NoteContext";
import NoteItem from "./NoteItems";
import AddNote from "./addNote";
import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  //TAKING CONTEXT FROM noteContext
  let context = useContext(noteContext);
  //Destructuring notes and setNotes from context
  const { notes, getNotes ,editNote } = context;
  const navigate = useNavigate();
  const [note,setNote] = useState({id:"",etitle:"",edescription:"",etag:"",Id:""});

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.Id,note.etitle,note.edescription,note.etag);
  }

  const handleChange = (e) => {
    setNote({...note,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
    getNotes();}
    else{
      navigate('/');
    }
  });

  const updateNote = (currentNote) => {
    let currNote ={etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag,Id:currentNote.id}
    setNote(currNote);
  };


  return (
    <>
      <AddNote />
     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title" id="exampleModalLabel">Updating Note</h5>
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div className="modal-body">
           <form>
          <div className="form-group">
            <label htmlFor="etitle">Title</label>
            <input
              defaultValue={note.etitle}
              type="text"
              className="form-control"
              id="etitle"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              onChange={handleChange}
              name="etitle"
              required
              minLength={3}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edescription">Description</label>
            <input
              defaultValue={note.edescription}
              name="edescription"
              type="text"
              className="form-control"
              id="edescription"
              placeholder="Enter Description"
              onChange={handleChange}
              required
              minLength={5}
            />
          </div>
          <div className="form-group">
            <label htmlFor="etag">Tag</label>
            <input
              defaultValue={note.etag}
              type="text"
              className="form-control"
              id="etag"
              aria-describedby="emailHelp"
              placeholder="Enter Tag"
              onChange={handleChange}
              name="etag"
              required
              minLength={1}
            />
          </div>
        </form>
           </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick} disabled={note.etitle.length<3 || note.edescription.length<5}>Update Note</button>
           </div>
         </div>
       </div>
     </div>

      <div className="row my-6">
        <h1>Your Notes</h1>
        <div className="Container">
        {notes.length===0 && "No Notes To Display"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem
              title={note.title}
              description={note.description}
              key={note._id}
              id={note._id}
              updateNote={updateNote}
              tag={note.tag}
            />
          );
        })}
      </div>
    </>
  );
};
export default Notes;
