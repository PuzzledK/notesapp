import React, { useState ,useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const SignUp = (props) => {
   const [user,setUser] = useState({name:"",email:"",password:""});
   const navigate = useNavigate();
   
   useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/home');
    }
  },[]);

   const handleSubmit = async (e) => {
     e.preventDefault();
     let response = await fetch("http://localhost:80/api/auth/createuser",{
      method:"POST",
      headers:{
         'Content-type':"application/json"
      },
      body:JSON.stringify({name:user.name,email:user.email,password:user.password})
     });
     let json = await response.json();
     if(json.sucess){
      navigate("/login");
      props.showAlert("Account created succesfully",'success');
      console.log("User Signed Up successfully");
     }
     else{
      props.showAlert("Invalid Credentials",'danger');
     }
   }

   const handleChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value});
   }

   return (
    <>
    <form className="container w-50" style={{'margin-top':'100px'}} onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="name">Name</label>
        <input type="text" className="form-control my-2" name="name" id="name" aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter Name" value={user.name} required/>

        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control my-2" name="email" id="email" aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter email" value={user.email} required/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" value={user.password} className="form-control my-2" name="password" id="password" placeholder="Password" required minLength={5}/>
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
    </>
   )
}

export default SignUp