/* eslint-disable no-unused-vars */
import noteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {

    // DUMMY NOTES TO SEND
    let notesInitial =[];

    const getNotes = async () => {
      const response = await fetch(`http://localhost:80/api/notes/fetchallnotes`,
      {
       method:"GET",
       headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token'),
       },
      });
      notesInitial = await response.json();
      setNotes(notesInitial);
    }
    // DUMMY NOTES END

    // JUST DUMMY FUNCTION TO UNDERSTAND
    // const s1 = {
    //     name:"Indra",
    //     class:"BE"
    // }

    // const [state,setState] = useState(s1);
    // const update = () => {
    //     setTimeout(()=>{
    //         setState({
    //             name:"BROMan",
    //             class:"Nursery"
    //         });
    //     },1000);
    // }
    // DUMMY FUNCTION ENDS
    const [notes,setNotes] = useState([]);

    //Add a Note
    const addNote = async (note) =>{
       //API CALL
       let response = await fetch("http://localhost:80/api/notes/addnote",
      {
       method:"POST",
       headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token'),
       },
       body:JSON.stringify(note)
      });

      let newNote = await response.json();

      //Update Notes Logic
      setNotes(notes.concat(newNote));
    }
    //Delete Not
    const deleteNote = async (id) =>{
      const response = await fetch(`http://localhost:80/api/notes/deletenote/${id}`,
      {
       method:"DELETE",
       headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token'),
       },
      });
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }
    //Edit Note
    const editNote = async (id,title,description,tag) =>{
      //API CALL
      const response = await fetch(`http://localhost:80/api/notes/updatenote/${id}`,
      {
       method:"PUT",
       headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token'),
       },
       body: JSON.stringify({title:title,description:description,tag:tag})
      });

      //LOGIC TO CHANGE NOTE
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id ===id){
          element.title = title;
          element.description = description;
          element.tag = tag;
          break;
        }
      }
      getNotes();
    }

    return(
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;