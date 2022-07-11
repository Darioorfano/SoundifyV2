import React from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";

export default function SoundifyHome(){

return(<>
  <div>
  <NavbarDesktop/>    
    
    <main>
      <p class="pt-5 text-white recent-Search">Búsquedas recientes</p>
      <div class="row d-flex m-auto">
        <div class="col-4">
          <article class="p-4 bg-danger">
            <p>Foto</p>
            <p>Elemento1</p>
          </article>
        </div>

        <div class="col-4">
          <article class="p-4 bg-danger">
            <p>Foto</p>
            <p>Elemento2</p>
          </article>
        </div>

        <div class="col-4">
          <article class="p-4 bg-danger">
            <p>Foto</p>
            <p>Elemento3</p>
          </article>
        </div>
      </div>

      <p class="text-white pt-5 new-Releases">Nuevos Lanzamientos</p>

      <div class="row d-flex m-auto">
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>
        
        <div class="row d-flex m-auto">
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>


      <div class="row d-flex m-auto">
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>

        <div class="row d-flex m-auto">
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
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