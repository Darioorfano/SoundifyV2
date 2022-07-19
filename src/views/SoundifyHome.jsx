import React from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";

export default function SoundifyHome(){

return(<>
  <div>
  <NavbarDesktop/>    
    
    <main>
      
      <p className="pt-5 text-white recent-Search">Búsquedas recientes</p>
      <div className="row d-flex m-auto">
        <div className="col-4">
          <article className="p-4 bg-danger">
            <p>Musica para pasar el rato</p>
            <p>Elemento1</p>
          </article>
        </div>

        <div className="col-4">
          <article className="p-4 bg-danger">
            <p>Foto</p>
            <p>Elemento2</p>
          </article>
        </div>

        <div className="col-4">
          <article className="p-4 bg-danger">
            <p>Foto</p>
            <p>Elemento3</p>
          </article>
        </div>
      </div>

      <p className="text-white pt-5 new-Releases">Nuevos Lanzamientos</p>

      <div className="row d-flex m-auto">
        <div className="col-6">
          <article className="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div className="col-6">
          <article className="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>
        
        <div className="row d-flex m-auto">
        <div className="col-6">
          <article className="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div className="col-6">
          <article className="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>


      <div className="row d-flex m-auto">
        <div className="col-6">
          <article className="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div className="col-6">
          <article className="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>

        <div className="row d-flex m-auto">
        <div className="col-6">
          <article className="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div className="col-6">
          <article className="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>




    </main>
    <NavbarMobile/>
  </div>

</>)

}