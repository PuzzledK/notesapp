import React, { useState } from "react";
import noteContext from "../Context/notes/NoteContext";
import { useContext } from "react";

const AddNote = () =>{
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note,setNote] = useState({title:"",description:"",tag:""});

    const handleClick = (e) => {
         e.preventDefault();
         addNote(note);
         setNote({title:"",description:"",tag:""});
    }

    const handleChange = (e) => {
       setNote({...note,[e.target.name]:e.target.value})
    }

    return(<>
        <h1>ADD A NOTE</h1>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              onChange={handleChange}
              name="title"
              value={note.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter Description"
              onChange={handleChange}
              value={note.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              aria-describedby="emailHelp"
              placeholder="Enter Tag"
              onChange={handleChange}
              name="tag"
              value={note.tag}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={note.title.length<3 || note.description.length<5}>
            Add Note
          </button>
        </form>
        </>
    )
}

export default AddNote