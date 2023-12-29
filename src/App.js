import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import NoteState from "./Context/notes/NoteState.js";
import Alert from "./Components/Alert.js";
import Login from "./Components/Login.js";
import SignUp from "./Components/SignUp.js";

function App() {
    const [alert,setAlert] = useState(null);
    const showAlert = (msg,type)=>{
        setAlert({msg:msg,type:type});

        setTimeout(()=>{setAlert(null)},1500);
    }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login showAlert={showAlert}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}
export default App;
