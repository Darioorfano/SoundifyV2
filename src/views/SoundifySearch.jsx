import React, { useState } from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import Searcher from "../components/Searcher";
import NavbarMobile from "../components/NavbarMobile";
import '../components/style/soundifySearch.css';

export default function SoundifySearch() {
  const [canciones, setCanciones] = useState([]);

  const cargarCanciones = (canciones) => {
    setCanciones(canciones)
    console.log(canciones)
  }



  return (<>
    <div >
      <NavbarDesktop></NavbarDesktop>
      <main className="bg-dark vh-100">

        <h1 className="text-light text-center pt-5 d-lg-none pb-3">Buscar</h1>

        <Searcher carga={cargarCanciones} />

        <section className="bg-dark  ml-5 mt-2">

          <div className="d-flex flex-column container container-songs">

            {
              canciones === [] ? <></> :
                <>
                  {canciones.map((cancion, index) => {

                    return (
                      <div className="d-flex gap-2 mb-4 
                        " key={index}>
                          
                        <img src={cancion.album.cover_small} alt="" />


                        <div>
                          <p className="text-light m-0">{cancion.title}</p>
                          <p className="text-light  m-0">{cancion.artist.name}</p>
                        </div>

                        
                      </div>
                    )



                  })}

                </>

            }


          </div>
        </section>

      </main>


     
    </div>
  </>)
}