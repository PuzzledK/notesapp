import React, {useEffect} from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/NoteContext";
import { useNavigate } from "react-router-dom";

const About = () => {
    let context = useContext(noteContext);
    let navigate = useNavigate();
    let {getUser} = context;
    useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate('/');
    }
    else{

    }
    },[]);

    return (
    <>
    <h1>THIS IS ABOUT Indra</h1>
    </>);
}
export default About