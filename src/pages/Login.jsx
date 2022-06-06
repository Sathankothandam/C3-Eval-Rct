import  "./Login.css";

import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()

  const Logincheck = ()=>{
    if(user.email == "" && user.password==""){
      return "Please fill the details"
    }else{
      return "Login Successful"
      navigate("/")
    }
  }

  return (
    <div>
      <input data-cy="login-email" placeholder="Enter Email" /><br/>
      <input data-cy="login-password" placeholder="Enter password" /><br/>
      <button data-cy="login-submit" onClick={Logincheck}>Login</button>
    </div>
  );
};

export default Login;
