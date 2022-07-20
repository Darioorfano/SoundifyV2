import React from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";

export default function SoundifyPlaylists(){

return (<>

<div id="background">
    <NavbarDesktop></NavbarDesktop>
    <main>
      <h1 className="text-white title-playlist pt-lg-3">Playlists</h1>
      <button className="btn btn-register "></button>

      <div className="createPlaylists">
        <p className="text-light">Nombre de la playlist</p>
        <input type="text" />
        <div className="row-fluid d-flex">
          <div className="col-6">
            <button
              className="btn btn-freeVersion cancelar"
              valueButton="Cancelar"
            ></button>
          </div>
          <div className="col-6">
            <button
              className="btn btn-freeVersion crearNombreDePlaylist "
             
            ></button>
          </div>
        </div>
      </div>

      <div className="row m-0 p-0  mt-lg-5">
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
      </div>
      <div className="row m-0 p-0  mt-lg-5">
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
      </div>
      <div className="row m-0 p-0 mt-lg-5">
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
      </div>
      <div className="row m-0 p-0 mt-lg-5">
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
      </div>
    </main>

    <NavbarMobile/>
  </div>

</>)
}
