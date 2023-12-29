import {React,useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom';

const Login = (props) => {

    let [user,setUser] = useState({email:"",password:""})
    let navigate = useNavigate();
  
    useEffect(()=>{
      if(localStorage.getItem('token')){
        navigate('/home');
      }
    },[]);

    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
      }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:80/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({email:user.email,password:user.password})
        });

        const json = await response.json();
        if(json.sucess){
          //save auth token and redirect
          localStorage.setItem('token',json.authToken);
          navigate("/home");
          props.showAlert("Signed In",'success')
        }else{
          props.showAlert("Invalid Credentials",'danger')
        }
    }
   return (
    <>
    <form className="container w-50 " style={{'margin-top':'100px'}} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control my-2" name="email" id="email" aria-describedby="emailHelp" onChange={handleChange} placeholder="Enter email" value={user.email}/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" value={user.password} className="form-control my-2" name="password" id="password" placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
    </>
   )
}

export default Login