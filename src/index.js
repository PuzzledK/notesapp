import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import NoteState from "./Context/notes/NoteState.js"
import Alert from './Components/Alert.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NoteState>
  <BrowserRouter>
  <Navbar/>
  <Alert message="Monke Man"/>
  <div className="container">
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
  </BrowserRouter>
  </NoteState>
);