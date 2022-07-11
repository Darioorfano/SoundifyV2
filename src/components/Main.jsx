import React from "react";
import './style/main.css';
import {Link } from "react-router-dom";
export default function Main() {

    return (<>

        <main className="contenedor-principal p-5 ">
            <h1 className="text-light title-index mt-5  pt-5 mb-5 ">Disfrutar es todo</h1>
            <p className="text-white mb-4 pt-sm-3 pb-sm-4 pt-md-4 pb-md-4 pt-lg-4 pb-lg-5 pt-xl-5 pb-xl-5 ">Millones de canciones y podcasts,utilice la versión gratuita para descubrir las funcionalidades</p>
       
                <Link to="/soundifyHome">
                    <button className="btn btn-freeVersion  pb-3 pt-4 mb-2 mt-sm-3 pt-sm-5 pb-sm-5 pt-md-5
        pb-md-5 pr-md-5 pl-md-5 pt-lg-5 pr-lg-5 pb-lg-5 pl-lg-5 pl-xl-5 pr-xl-5 pt-xl-5 pb-xl-5 text-white"></button>
                </Link>
      
        </main>

    </>)

}

