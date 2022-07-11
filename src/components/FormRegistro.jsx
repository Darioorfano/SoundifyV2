import React from "react";
import './style/formRegistro.css';
import { Link } from "react-router-dom";

export default function FormRegistro() {

    return (<>
        <div>
            <form className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4  m-auto  ">
                <p className="title-register">Registro</p>
                <div className="form-group mt-5 pt-4 mb-5 ">
                    <label for="inputCorreoInicioSesion">Dirección de Correo Electronico:</label>
                    <input type="email" className="form-control" id="inputCorreoInicioSesion" aria-describedby="emailHelp" placeholder="Dirección de Correo Electronico" />

                </div>
                <div className="form-group mb-4">
                    <label for="exampleInputPassword1">Contraseña:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                </div>
                <div className="form-group mb-4 mt-5">
                    <label for="nombreDeUsuario">Nombre de usuario:</label>
                    <input type="text" className="form-control" id="nombreDeUsuario" placeholder="Nombre de usuario" />
                </div>

                <Link to="/login"><button className="btn btn-freeVersion  mt-4 pt-3 pb-3 pl-5 pr-5 mb-5 mt-2 mb-2" ></button></Link>

            </form>
        </div>

    </>)

}
