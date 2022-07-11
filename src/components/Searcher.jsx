import React,{useState,useEffect} from 'react';
import './style/searcher.css';
export default function Searcher(artist){
  const [songs, setSongsByArtist] = useState(null);


const getSongByArtist = async(name)=>{
  

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6b92ea4d31msh6c265e3a9799e41p10eff6jsnb4dd68601ae9',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  
  await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}`, options)
    .then(response => response.json())
    .then(songs=> {
      setSongsByArtist(songs);
      console.log(songs)
    }

    )
    .catch(err => console.error(err));

}
useEffect(() => {
  if(artist != ""){
    getSongByArtist(artist);
  }
 

 
},[artist])

  return(
    <>
    <nav className="searcher">
    <form className="form-inline d-flex m-auto">
      <div className="input-group">
        <div className="input-group-prepend">
          <i className="bi bi-search " id="lupaBuscador"></i>
        </div>
        <input
          type="text"
          id="searcher"
          className="form-control"
          placeholder="Buscar Artistas o canciones"
        value={songs} onChange={ (e) => setSongsByArtist(e.target.value)}
        />
      </div>
    </form>
  </nav>
    </>
)
}
