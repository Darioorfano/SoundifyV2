import React from "react";
import './style/player.css'
export default function Player({modo, id}) {
    // modo = track / playlist
    // id = id cancion / playlist
    return (
        <div>
            <iframe title="deezer-widget" id="player" 
            src={`https://widget.deezer.com/widget/dark/${modo}/${id}`} 
             allowtransparency="true" 
            allow="encrypted-media; clipboard-write"></iframe>
        </div>
    )

}