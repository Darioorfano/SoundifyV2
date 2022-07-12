import React from "react";
import './style/footer.css';


export default function Footer() {

    return (
        <>
            <footer className="p-5 ">
                <div className="row text-center">

                    <div className="col-12 mb-3 col-md-4">
                        <p className="titleFooter text-white">Compañia</p>
                        <p className="text-white">Acerca de</p>
                        <p className="text-white">Empleo</p>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                        <p className="titleFooter text-white mb-4">Comunidades</p>
                        <p className="text-white">Para artistas</p>
                        <p className="text-white">Desarrolladores</p>
                        <p className="text-white">Publicidad</p>
                        <p className="text-white">Inversionistas</p>
                        <p className="text-white">Proveedores</p>
                        <p className="text-white">Ayuda</p>
                    </div>
                    <div className="col-12 mt-4 col-md-4">
                        <p className="titleFooter mt-3 mt-sm-0 text-white">Derecho de Autor</p>
                        <p className="text-white">Todos los derechos reservados</p>
                    </div>



                </div>

            </footer>

        </>
        )


}
