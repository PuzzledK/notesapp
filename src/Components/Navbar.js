import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();

    return (<>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/home" || location.pathname==="/"? "active":""}`} aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>);
}
export default Navbar