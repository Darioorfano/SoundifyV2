import React from "react";
import FormRegistro from "../components/FormRegistro";
import Footer from "../components/Footer";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";

export default function Registro() {

    return (<>
        <div>
            
            <NavbarDesktop/>
            <NavbarMobile/>

            <FormRegistro></FormRegistro>

            <Footer></Footer>



        </div>


    </>)

}