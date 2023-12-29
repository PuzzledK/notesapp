import React, { useEffect } from "react";
import Notes from "./Notes";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  let navigate = useNavigate();
  useEffect(()=>{
  if(!localStorage.getItem('token')){
    navigate('/login');
  }
  },[]);
  return (
    <>
      <div>
        <Notes showAlert={props.showAlert}/>
      </div>
    </>
  );
};
export default Home;
