import React from "react";
import './style/navbarMobile.css';
import { Link } from "react-router-dom";

export default function NavbarMobile(){

return(<>

<div id="navMobile" className="pt-2 pb-3 d-flex justify-content-around fixed-bottom ">
     
     <Link className="text-white mt-2 text-decoration-none icono" to='/home' ><i className="bi bi-house-door text-center"></i> Inicio</Link>
  <Link  className="text-white mt-2 text-decoration-none icono" to='/search'><i className="bi bi-search text-center"></i>Buscar</Link>
  <Link className="text-white mt-2 text-decoration-none icono" to='/playList'><i className="bi bi-music-note-list text-center"></i>Playlists</Link>
     
     
    

</div>

    </>)



}