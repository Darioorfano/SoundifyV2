import React, { useState, useEffect } from 'react';
import './style/searcher.css';

export default function Searcher({canciones=[]}) {
  const [cancion, setCancion] = useState("");
  
  
  
  const getCancion =  (nombre) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '084feb1f83mshb30be01cf46502cp1902fejsn995566210a6e',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${nombre}`, options)
      .then(response => response.json()
       
      )
      .then(response =>{
      console.log(response)
      
      
        

      } 
        )
      
      .catch(err => console.error(err));


  }

  useEffect(() => {
    if(cancion != ""){
      getCancion(cancion)
    }
     

  }, [cancion,])


  return (
    <>
      <nav className="searcher  mt-5 d-flex m-auto" id="searcher">
        <form className="form-inline d-flex m-auto">
          <div className="input-group">
            <div className="input-group-prepend">
              <i className="bi bi-search " id="lupaBuscador"></i>
            </div>
            <input
              type="text"
              id="searcher"
              className="form-control"
              value={cancion} onChange={(e) => setCancion(e.target.value)} placeholder="Buscar Artistas o canciones"

            />
       
        <>
            <div className="container">
                {
                    canciones == null? <></>:
                    <>
                       {Object.keys(canciones).map( key=> {
                        let cancion1 = canciones[key]
                        return(
                            <div key={cancion1.title}>
                            
                        </div>
                        )
                       })}
                    </>
                }
            </div>


        </>
          </div>
        </form>
      </nav>
    </>
  )

}