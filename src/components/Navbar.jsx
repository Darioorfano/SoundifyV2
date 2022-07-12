import React from "react";
import './style/navbar.css'
import { Link } from "react-router-dom";

export default function Navbar(){

return(<>

<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <h1 className="navbar-brand logo ml-lg-5 ml-xl-5 pl-xl-5">Soundify</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mt-4 me-auto mb-2 mb-lg-0">
     <li className="nav-item  text-center mr-xl-3">
        <Link to="/login" className="nav-link text-light ">Iniciar Sesión</Link>
      </li>
      <li className="nav-item  text-center mr-xl-3">
        <Link to="/registro" className="nav-link mt-3 mb-3 text-light">Registrate</Link>
      </li>
       <li className="nav-item  text-center mr-xl-3 ">
        <Link className="nav-link text-light" to="/ayuda">Ayuda</Link>
      </li>
    
      </ul>
    </div>
  </div>
</nav>


</>)


}