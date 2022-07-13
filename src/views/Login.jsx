import React from "react";
import FormLogin from "../components/FormLogin";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../components/style/formLogin.css'

export default function Login() {



  return (<>
    <div className="bg-dark ">
      <Navbar />
      <FormLogin></FormLogin>
      <Footer></Footer>
    </div>

  </>)
}