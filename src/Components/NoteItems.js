import React from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  let {deleteNote} = context;
  let {updateNote} = props;
  let note = {id:props.id,title:props.title,description:props.description,tag:props.tag}

  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <i className="fa-solid fa-trash" onClick={()=>{deleteNote(props.id)}}/>
          <i className="fa-regular fa-pen-to-square mx-4" onClick={()=>{updateNote(note)}} data-bs-toggle="modal" data-bs-target="#exampleModal"/>
        </div>
      </div>
    </div>
  );
};
export default NoteItem;
