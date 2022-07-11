import React from "react";
import FormLogin from "../components/FormLogin";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login (){
   
   
   
   return(<>
   <div>
     <Navbar></Navbar>

<FormLogin></FormLogin>
<h5>¿No tenés cuenta?</h5>
<Link to="/registro"><btn
    className="btn btn-register pt-3 pb-3 pr-5 pl-5 mt-2 mb-4 pl-sm-5 pr-sm-5 "

  ></btn>
</Link>
<Footer></Footer>
</div>
    
    </>)
  }