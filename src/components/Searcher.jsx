import React, { useState, useEffect } from 'react';
import './style/searcher.css';

export default function Searcher({carga}) {
  
  const [cancion, setCancion] = useState([]);
  
  const getCancion =  (nombre) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '084feb1f83mshb30be01cf46502cp1902fejsn995566210a6e',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${nombre}`, options)
      .then(response => 
        response.json()
      )
      .then(response =>{
      carga(response.data)
   

      } 
        )
      
      .catch(err => console.error(err));


  }

  useEffect(() => {
    if(cancion != ""){
    
      getCancion(cancion);
    
    }else{
      carga([]);

    }
     

  }, [cancion])


  return (
    <div className='mb-4'>
     
        <form className="form-inline d-flex m-auto" id="searcher">
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
       
          </div>
        </form>
     
    </div>
  )

}