import React,{ useState } from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import Searcher from "../components/Searcher";
import '../components/style/soundifySearch.css'

export default function SoundifySearch (){
  const [artist, setArtist] = useState("");
    return(<>
     <div>
    <NavbarDesktop></NavbarDesktop>
    <main>

 <h1 className="pt-5 mb-4 text-white d-lg-none">Buscar</h1>

    <Searcher songs={artist} setSongsByArtist={setArtist}></Searcher>
    <section className="mt-2">
      <p className="pt-5 text-white last-searches-title">Últimas búsquedas</p>
      <div className="row-fluid d-flex">
     
      {
         artist == null ? <></> :
        <>
         <div className="col-4 img-column">
          <p className="text-white">Imagen</p>
        </div>
        <div className="col-4 song_Name">
       
          <p className="text-white">Nombre {artist.title}</p>
         
          
        </div>
        
        </>

      }
       
        <div className="col-4 cross">
          <i className="bi bi-x text-white"></i>
        </div>
      </div>
    </section>

    </main>
   

    <NavbarMobile />
  </div>
        </>)
}