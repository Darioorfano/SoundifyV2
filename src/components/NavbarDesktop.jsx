
import React from "react";
import { Link } from "react-router-dom";

import './style/navbarDesktop.css';

export default function NavbarDesktop(){
return(<>

<div>
<div className="navDesktop pt-2 pb-3  ">
    <h2 className="text-white text-center">Soundify</h2>
 
    <Link className="text-white mr-lg-4 mt-lg-2 text-decoration-none icono" to="/home" ><i className="bi bi-house-door pr-lg-1"></i> Inicio</Link>
<Link className="text-white  mr-lg-2 mt-2 text-decoration-none icono" to="/search"><i className="bi bi-search pr-lg-2 "></i>Buscar</Link>
<Link className="text-white   mt-2 text-decoration-none icono" to="/playList"><i className="bi bi-music-note-list pr-lg-2"></i>Playlists</Link>


</div>
</div>

</>
)
}


