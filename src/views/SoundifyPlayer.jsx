import React,{useState} from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import Player from "../components/Player";

export default function SoundifyPlayer() {
    const [modo, setModo] = useState("track")
    const[id,setId]=useState("1109731");
    return (<>
        <div>
            <NavbarDesktop></NavbarDesktop>

            <main>
          
            { id == null? <></>:
            <Player modo={modo} id={id}></Player>
            }

            </main>
         
        </div>
     
    </>)

}