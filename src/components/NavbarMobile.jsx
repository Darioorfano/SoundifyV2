import React from "react";
import './style/navbarMobile.css';
import { Link } from "react-router-dom";

export default function NavbarMobile(){

return(<>

<div id="navMobile" className="pt-2 pb-3 d-flex justify-content-around fixed-bottom ">
     
     <Link className="text-white mt-2 text-decoration-none icono" to='/soundifyHome' ><i className="bi bi-house-door"></i> Inicio</Link>
  <Link  className="text-white mt-2 text-decoration-none icono" to='/soundifySearch'><i className="bi bi-search"></i>Buscar</Link>
  <Link className="text-white mt-2 text-decoration-none icono" to='/soundifyPlaylists'><i className="bi bi-music-note-list"></i>Playlists</Link>
     
     
    

</div>

    </>)



}