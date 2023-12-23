/* eslint-disable no-unused-vars */
import noteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {

    // DUMMY NOTES TO SEND
    const notesInitial = [
        {
          "_id": "658573cb6953fd0c18bdf5a1",
          "user": "65846d840df197e0e39d2274",
          "title": "My Little Ponys 2",
          "description": "We got new pony",
          "tag": "General",
          "dateCreated": "2023-12-22T11:32:27.317Z",
          "__v": 0
        },
        {
          "_id": "658573d86953fd0c18bdf5a3",
          "user": "65846d840df197e0e39d2274",
          "title": "My Little Ponys 3",
          "description": "It died too :(",
          "tag": "General",
          "dateCreated": "2023-12-22T11:32:40.731Z",
          "__v": 0
        },
        {
          "_id": "658577cc4ec0722bcc8f53ae",
          "user": "65846d840df197e0e39d2274",
          "title": "My Little Ponys 4",
          "description": "New Pony Method :)",
          "tag": "General",
          "dateCreated": "2023-12-22T11:49:32.036Z",
          "__v": 0
        },
        {
          "_id": "6585781dd209ae2ca2316ebd",
          "user": "65846d840df197e0e39d2274",
          "title": "My Little Ponys 5",
          "description": "New Pony Method 2:)",
          "tag": "General",
          "dateCreated": "2023-12-22T11:50:53.641Z",
          "__v": 0
        },
        {
          "_id": "65857833d209ae2ca2316ebf",
          "user": "65846d840df197e0e39d2274",
          "title": "My Little Ponys 6",
          "description": "New Pony Method 2 test 2:)",
          "tag": "General",
          "dateCreated": "2023-12-22T11:51:15.530Z",
          "__v": 0
        },
        {
          "_id": "65857d23da849ec8197f86d1",
          "user": "65846d840df197e0e39d2274",
          "title": "My Little Ponys 6",
          "description": "New Pony Method 2 test 2:)",
          "tag": "General",
          "dateCreated": "2023-12-22T12:12:19.777Z",
          "__v": 0
        }
      ]

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

    const [notes,setNotes] = useState(notesInitial);

    //Add a Note
    const addNote = (title,description,tag) =>{
       //TO DO API CALL
        let note = null;
       setNotes(notes.push(note));
    }
    //Delete Note
    const deleteNote = (id) =>{
     
    }
    //Edit Note
    const editNote = (id) =>{

    }

    return(
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;