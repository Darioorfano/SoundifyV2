import React from "react";
import FormLogin from "../components/FormLogin";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../components/style/formLogin.css'

export default function Login() {



  return (<>
    <div className="bg-dark ">
      <Navbar />
      <FormLogin></FormLogin>
      <h6 className="text-light text-center">¿No tenés cuenta?</h6>
      <div className="container d-flex pb-5">
      <Link to="/registro" className="btn btn-register text-light m-auto w-75  pt-3 pb-3 pr-5 pl-5 mt-2 mb-4 pl-sm-5 pr-sm-5">REGISTRARSE</Link>
      </div>
      
      <Footer></Footer>
    </div>

  </>)
}