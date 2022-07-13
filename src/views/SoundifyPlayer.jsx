import React from "react";
import NavbarDesktop from "../components/NavbarDesktop";
import Searcher from "../components/Searcher";
import NavbarMobile from "../components/NavbarMobile";
export default function SoundifyPlayer() {

    return (<>
        <div>
            <NavbarDesktop></NavbarDesktop>

            <main>
                <Searcher></Searcher>


            </main>
            <NavbarMobile></NavbarMobile>
        </div>
     
    </>)

}