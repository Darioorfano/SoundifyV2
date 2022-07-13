import React from "react";
import './style/formLogin.css';
import { Link } from "react-router-dom";

export default function FormLogin() {
    return (<>
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h2 className="card-title text-center mb-5 fw-light fs-1">Iniciar Sesion</h2>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="Correo Electronico" />
                                        <label for="floatingInput">Correo Electronico</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
                                        <label for="floatingPassword">Contraseña</label>
                                    </div>
                                    <div className="d-grid">
                                        <Link to="/soundifyHome" className="btn btn-iniciarSesion mt-4 pt-3 pb-3 pl-5 pr-5 mb-5 mt-2 mb-2 text-light" >INICIAR SESION</Link>
                                    </div>
                                    <div className="d-grid">
                                    <h6 className=" text-center">¿No tenés cuenta?</h6>
                                    <Link to="/registro" className="btn btn-register text-light m-auto  w-100  pt-3 pb-3 pl-5 pr-5 mt-2 mb-4">REGISTRARSE</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>)


}
