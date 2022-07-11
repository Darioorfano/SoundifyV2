import React from "react";
import './style/navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>

      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">

          <Link className="navbar-brand logo ml-lg-5 ml-xl-5 pl-xl-5" to="/home">Soundify

          </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse collapse navbar-collapse d-lg-flex justify-content-lg-end d-xl-flex justify-content-xl-end ml-xl-5 " id="navbarNav">
            
             <ul className="navbar-nav mr-lg-5 mt-lg-2">
             
            <li className="nav-item  mr-xl-3">
                <Link to="/" className="nav-link">Inicio</Link>
              </li>
              <li className="nav-item mr-xl-3">
                <Link to="/login" className="nav-link ">Iniciar Sesion</Link>
              </li>
              <li className="nav-item mr-xl-3">
                <Link to="/registro" className="nav-link" >Registrarse</Link>
              </li>
              <li className="nav-item mr-xl-3 ">
                <Link to="/ayuda" className="nav-link" >Ayuda</Link>
              </li>
             
            </ul>  
          </div>
        </nav>
      </header>
   
    </>
  )

}