import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const handleClick = () => {
      localStorage.removeItem('token');
      navigate('/login');
    }

    return (<>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={localStorage.getItem('token')?'/home':'/login'}>iNoteBook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/home"? "active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="about">User-Info</Link>
            </li>
          </ul>
          { !localStorage.getItem('token') &&<form className="d-flex">
          <Link className="btn btn-primary mx-3" to="/login" type="button">Log In</Link>
          <Link className="btn btn-primary mx-3" to="/signup" type="button">Signup</Link>
          </form>
          }
          { localStorage.getItem('token') &&<form className="d-flex">
          <button type="button" onClick={handleClick} class="btn btn-danger">Sign Out</button>
          </form>
          }
        </div>
      </div>
    </nav>
    </>);
}
export default Navbar